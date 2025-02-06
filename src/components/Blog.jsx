import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Button from "./Button";

const CardContent = ({ children }) => (
  <div style={{ padding: "1rem" }}>{children}</div>
);

const mockPosts = [
  {
    id: 1,
    title: "Understanding React Hooks",
    excerpt: "A beginner's guide to using hooks effectively in React...",
    fullText:
      "React hooks are a fundamental feature introduced in React 16.8 that allow you to use state, lifecycle methods, and other React features in functional components. Prior to hooks, these features were only available in class components, but with hooks, functional components can now handle complex logic while maintaining a simpler and cleaner structure. ",
    author: "John Doe",
    date: "Feb 6, 2025",
  },
  {
    id: 2,
    title: "10 Tips for Better Web Design",
    excerpt: "Improve your website design with these practical tips...",
    fullText:
      "When it comes to web design, following best practices is essential for creating websites that are not only visually appealing but also functional, user-friendly, and accessible. Good web design improves the overall user experience (UX), increases conversion rates, and ensures that the website is responsive and compatible across various devices and browsers",
    author: "Jane Smith",
    date: "Feb 5, 2025",
  },
];

export default function Blog() {
  const [expandedPost, setExpandedPost] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        margin: "0 auto",
        padding: "1.5rem",
        backgroundColor: darkMode ? "#1a202c" : "#fff",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: darkMode ? "#333" : "#2d3748",
          color: "#fff",
          padding: "1rem",
          marginBottom: "1.5rem",
        }}
      >
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>My Blog</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "14px",
          }}
        >
          <div
            style={{
              margin: "5px 0",
            }}
          >
            <Link
              to="/login"
              style={{
                backgroundColor: darkMode ? "#fff" : "#333",
                color: darkMode ? "#333" : "#fff",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
            >
              Login
            </Link>{" "}
            |{" "}
            <Link
              to="/signup"
              style={{
                backgroundColor: darkMode ? "#fff" : "#333",
                color: darkMode ? "#333" : "#fff",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
            >
              Signup
            </Link>
          </div>
          <Button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              backgroundColor: darkMode ? "#fff" : "#333",
              color: darkMode ? "#333" : "#fff",
              border: "none",
            }}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>
      </nav>
      <h1
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem" }}
      >
        Latest Blog Posts
      </h1>
      <div style={{ display: "grid", gap: "1rem" }}>
        {mockPosts.map((post) => (
          <Card
            key={post.id}
            style={{
              backgroundColor: darkMode ? "#2d3748" : "#f7fafc",
              color: darkMode ? "#fff" : "#333",
            }}
          >
            <CardContent>
              <h2 style={{ fontSize: "1.25rem", fontWeight: "600" }}>
                {post.title}
              </h2>
              <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
                {post.author} • {post.date}
              </p>
              <p style={{ marginBottom: "1rem" }}>
                {expandedPost === post.id ? post.fullText : post.excerpt}
              </p>
              <Button
                onClick={() =>
                  setExpandedPost(expandedPost === post.id ? null : post.id)
                }
                style={{
                  backgroundColor: darkMode ? "#fff" : "#333",
                  color: darkMode ? "#333" : "#fff",
                  border: "none",
                }}
              >
                {expandedPost === post.id ? "Show Less" : "Read More"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
