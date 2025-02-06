import React, { useState } from "react";
import Card from "./Card";
import Input from "./Input";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function AuthPage({ title }) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: darkMode ? "#1a202c" : "#fff",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      <Card
        style={{
          backgroundColor: darkMode ? "#2d3748" : "#fff",
          color: darkMode ? "#fff" : "#000",
          width: "300px",
          textAlign: "center",
        }}
      >
        <h2>{title}</h2>
        {title === "Signup" && (
          <Input
            type="text"
            placeholder="Full Name"
            style={{
              boxSizing: "border-box",
              backgroundColor: darkMode ? "#1a202c" : "#fff",
              color: darkMode ? "#fff" : "#000",
            }}
          />
        )}
        <Input
          type="email"
          placeholder="Email"
          style={{
            boxSizing: "border-box",
            backgroundColor: darkMode ? "#1a202c" : "#fff",
            color: darkMode ? "#fff" : "#000",
          }}
        />
        <Input
          type="password"
          placeholder="Password"
          style={{
            boxSizing: "border-box",
            backgroundColor: darkMode ? "#1a202c" : "#fff",
            color: darkMode ? "#fff" : "#000",
          }}
        />
        <Button
          style={{
            boxSizing: "border-box",
            backgroundColor: darkMode ? "#fff" : "#333",
            color: darkMode ? "#000" : "#fff",
            width: "100%",
          }}
        >
          {title}
        </Button>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "14px",
          }}
        >
          <Button
            style={{
              boxSizing: "border-box",
              marginTop: "1rem",
              backgroundColor: darkMode ? "#fff" : "#333",
              color: darkMode ? "#000" : "#fff",
              width: "50%",
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Back to Blog
            </Link>
          </Button>
          <Button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              marginTop: "1rem",
              backgroundColor: darkMode ? "#fff" : "#333",
              width: "50%",
              color: darkMode ? "#000" : "#fff",
            }}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>
      </Card>
    </div>
  );
}
