import { NextResponse } from 'next/server';
import { executeQuery, initializeCMSTables, comparePassword } from '../../../../../lib/cmsDatabase';
import jwt from 'jsonwebtoken';

// Login API route
export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email et mot de passe requis' },
        { status: 400 }
      );
    }

    // Find user by email
    const users = await executeQuery(
      'SELECT * FROM cms_users WHERE email = ? AND is_active = true',
      [email]
    );

    if (users.length === 0) {
      return NextResponse.json(
        { message: 'Email ou mot de passe incorrect' },
        { status: 401 }
      );
    }

    const user = users[0];

    // Verify password
    const isValidPassword = await comparePassword(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json(
        { message: 'Email ou mot de passe incorrect' },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: user.id, 
        email: user.email, 
        role: user.role 
      },
      process.env.JWT_SECRET || 'azalee-cms-secret-key',
      { expiresIn: '24h' }
    );

    // Store session in database
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 24);
    
    await executeQuery(
      'INSERT INTO cms_sessions (user_id, token, expires_at) VALUES (?, ?, ?)',
      [user.id, token, expiresAt]
    );

    // Return user data (without password)
    const userData = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    };

    return NextResponse.json({
      message: 'Connexion réussie',
      token,
      user: userData,
    });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

// Initialize CMS tables on first request
export async function GET() {
  try {
    await initializeCMSTables();
    return NextResponse.json({ message: 'CMS initialized successfully' });
  } catch (error) {
    console.error('CMS initialization error:', error);
    return NextResponse.json(
      { message: 'CMS initialization failed' },
      { status: 500 }
    );
  }
}
