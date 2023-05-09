# rileygrotenhuis.com

My personal website.

## Installation

1. Clone the repository

   ```bash
   git clone https://github.com/rileygrotenhuis/rileygrotenhuis.com.git
   ```

2. Install dependencies

   ```bash
   cd rileygrotenhuis.com
   npm install
   ```

3. Copy the `.env.example` file as `.env.local` and `.env` then update the given variables

   ```bash
   cp .env.example .env.local
   cp .env.example .env
   ```

4. Run migrations

   ```bas
   npm run prisma:migrate
   ```

5. Start the development server

   ```
   npm run dev
   ```

6. Your application will now begin running at http://localhost:3000
