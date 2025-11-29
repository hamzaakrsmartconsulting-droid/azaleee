# Admin Dashboard Setup

## Quick Start

1. **Set up MongoDB Atlas** (see `MONGODB_SETUP.md` for detailed instructions)
   - Create a free MongoDB Atlas account
   - Get your connection string
   - Add it to `.env.local`:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/azalee_db?retryWrites=true&w=majority
JWT_SECRET=your_secure_random_string_here
```

2. **Start the development server**
   ```bash
   npm run dev
   ```

3. **Access the admin login**
   - Go to: `http://localhost:4028/admin/login`
   - Default credentials:
     - Email: `admin@azalee.com`
     - Password: `admin123`

4. **First Login**
   - The admin user is automatically created on first login
   - You'll be redirected to the dashboard after successful login

## Features

- ✅ MongoDB Atlas integration
- ✅ Secure password hashing (bcrypt)
- ✅ JWT token authentication
- ✅ Protected admin routes
- ✅ Admin dashboard UI
- ✅ Session management

## API Endpoints

- `POST /api/auth/login` - User login
- `GET /api/auth/verify` - Verify JWT token
- `GET /api/auth/init` - Initialize default admin user (optional)

## File Structure

```
src/
├── lib/
│   ├── mongodb.js          # MongoDB connection
│   └── models/
│       └── User.js          # User model
├── app/
│   ├── api/
│   │   └── auth/
│   │       ├── login/       # Login API
│   │       ├── verify/      # Verify token API
│   │       └── init/        # Initialize admin
│   └── admin/
│       ├── login/           # Login page
│       ├── page.jsx         # Dashboard page
│       └── layout.jsx       # Admin layout with auth
```

## Security Notes

- Change default admin password after first login
- Use strong JWT_SECRET in production
- Never commit `.env.local` to version control
- Restrict MongoDB IP access in production


