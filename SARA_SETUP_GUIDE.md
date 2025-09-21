# SARA Chatbot Setup and Test Guide

## 1. Database Setup

First, run the database setup script:

```bash
mysql -u root -p < database/setup_sara_chatbot.sql
```

Or manually in phpMyAdmin:
1. Create database `azalee_cms` if it doesn't exist
2. Run the SQL commands from `database/setup_sara_chatbot.sql`

## 2. Environment Configuration

Create a `.env.local` file in your project root with:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=azalee_cms
DB_PORT=3306
```

## 3. Test the System

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open your website and click the SARA chatbot button (bottom-right)

3. Complete a full conversation:
   - Choose "Obtenir une réponse rapide à une question patrimoniale"
   - Select a topic (e.g., "Réduire mes impôts")
   - Answer the thematic question
   - Fill out your profile information
   - Choose an action (RDV, PDF, or callback)

4. Check the CMS to see your data:
   - Go to `/cms/chatbot`
   - View Sessions tab to see your conversation
   - View Leads tab to see your lead data
   - View Analytics tab to see statistics

## 4. What You'll See in CMS

### Sessions Tab:
- Your session ID
- Status (active/completed/abandoned)
- Current step
- Creation date
- Click "Voir détails" to see full conversation

### Leads Tab:
- **Rendez-vous**: If you chose RDV
- **Rappels**: If you chose callback
- **PDF**: If you chose PDF request

### Analytics Tab:
- Total sessions
- Completed sessions
- Conversion rate
- Average session duration
- Top user intentions

## 5. Troubleshooting

If you don't see data in CMS:
1. Check browser console for errors
2. Verify database connection
3. Check that tables were created successfully
4. Ensure environment variables are correct

The SARA chatbot will automatically save all user interactions to the database, and you'll see them appear in real-time in the CMS interface!
