package main

import (
    "context"
    "log"
    "net/http"
    "os"
    "os/signal"
    "syscall"
    "time"

    "github.com/joho/godotenv"
    "github.com/labstack/echo/v4"
    "github.com/labstack/echo/v4/middleware"
    server "portfolio-backend/internal/server"
)

func main() {
    _ = godotenv.Load()

    e := echo.New()
    e.HideBanner = true

    e.Use(middleware.Recover())
    e.Use(middleware.Logger())
    e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
        AllowOrigins: []string{"*"},
        AllowMethods: []string{http.MethodGet, http.MethodPost, http.MethodPut, http.MethodDelete, http.MethodOptions},
        AllowHeaders: []string{"*"},
    }))

    // Routes
    server.RegisterRoutes(e)

    // Graceful shutdown
    srvAddr := ":8080"
    if v := os.Getenv("PORT"); v != "" {
        srvAddr = ":" + v
    }

    go func() {
        if err := e.Start(srvAddr); err != nil && err != http.ErrServerClosed {
            log.Fatalf("server error: %v", err)
        }
    }()

    quit := make(chan os.Signal, 1)
    signal.Notify(quit, os.Interrupt, syscall.SIGTERM)
    <-quit

    ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
    defer cancel()
    if err := e.Shutdown(ctx); err != nil {
        log.Fatalf("shutdown error: %v", err)
    }
}


