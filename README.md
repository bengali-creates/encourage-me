# [Encourage Me](https://encourage-me.vercel.app/)

Encourage Me is a modern crowdfunding platform designed for creators to receive support and encouragement from their fans. Fans can donate, leave messages, and help creators fund their projects, all in a seamless and interactive experience.

## 🔗Check Live ➡️ [encourage-me.](https://encourage-me.vercel.app/)
## 🚀 Purpose

- **Empower Creators:** Give creators a platform to receive financial and moral support from their audience.
- **Fan Engagement:** Allow fans to encourage (donate) you and leave encouraging messages.
- **Transparency:** Showcase recent donations and messages to foster a supportive community.

## 🖥️ How It Works

1. **User Authentication:** Users sign in using GitHub (with support for other providers possible).
2. **Profile Pages:** Each creator has a unique profile page where fans can donate and leave messages.
3. **Dashboard:** Creators can manage their profile, update payment details, and view recent activity.
4. **Payments:** Integrated with Razorpay for secure and smooth transactions.
5. **Donation Feed:** Recent donations and messages are displayed publicly on profile pages.

## 🛠️ Tech Stack

| Technology      | Purpose/Usage                                                                 |
|-----------------|-------------------------------------------------------------------------------|
| **Next.js**     | React framework for SSR, routing, and API routes                              |
| **React**       | UI library for building interactive components                                |
| **MongoDB**     | NoSQL database for storing users, payments, and messages                      |
| **Mongoose**    | ODM for MongoDB, schema and model management                                  |
| **NextAuth.js** | Authentication and session management (GitHub provider enabled)                |
| **Razorpay**    | Payment gateway integration for handling donations                            |
| **Tailwind CSS**| Utility-first CSS framework for rapid UI development                          |
| **Framer Motion, GSAP** | Animation libraries for smooth UI transitions and effects             |
| **React Toastify** | Toast notifications for user feedback                                      |

## 📁 Folder Structure

```
actions/        # Server actions (e.g., user, payment logic)
animations/     # Custom animation components (scroll, fade, drag-n-drop, etc.)
app/            # Next.js app directory (routing, pages, API routes)
components/     # Reusable React components (Navbar, Dashboard, Payment, etc.)
db/             # Database connection logic
models/         # Mongoose models (User, Payment)
public/         # Static assets (images, videos, etc.)
```

## ⚙️ Key Features

- **Authentication:** Secure login with GitHub.
- **Profile Customization:** Creators can update their profile, payment info, and images.
- **Donation Modal:** Fans can donate preset or custom amounts and leave a message.
- **Live Feed:** Recent donations and messages are shown with animations.
- **Responsive Design:** Mobile-friendly and visually appealing UI.
- **Notifications:** Real-time feedback using toast notifications.

## 🏗️ Setup & Development

1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd encourage-me
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure environment variables:**
   - Create a `.env.local` file with your MongoDB URI, Razorpay keys, and NextAuth secrets.

4. **Run the development server:**
   ```sh
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000) to view the app.

## 🌐 Deployment

- Easily deployable on [Vercel](https://vercel.com/) or any platform supporting Next.js.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Razorpay Docs](https://razorpay.com/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs/installation)

## 🤝 Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements.

## 📄 License

This project is for educational/demo purposes. Please contact the author for production/commercial use.

---

**Showcase your skills:**  
This project demonstrates full-stack development, payment integration, authentication, database modeling, and modern UI/UX—all valuable for internship