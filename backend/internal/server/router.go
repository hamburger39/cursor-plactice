package server

import (
    "net/http"
    "strconv"

    "github.com/labstack/echo/v4"
    "portfolio-backend/internal/data"
)

func RegisterRoutes(e *echo.Echo) {
    e.GET("/healthz", func(c echo.Context) error {
        return c.JSON(http.StatusOK, map[string]string{"status": "ok"})
    })

    api := e.Group("/api")

    api.GET("/profile", func(c echo.Context) error {
        return c.JSON(http.StatusOK, data.SampleProfile)
    })

    api.GET("/projects", func(c echo.Context) error {
        return c.JSON(http.StatusOK, data.SampleProjects)
    })

    api.GET("/projects/:id", func(c echo.Context) error {
        idStr := c.Param("id")
        id, err := strconv.Atoi(idStr)
        if err != nil {
            return c.JSON(http.StatusBadRequest, map[string]string{"error": "invalid id"})
        }
        p := data.FindProjectByID(id)
        if p == nil {
            return c.JSON(http.StatusNotFound, map[string]string{"error": "not found"})
        }
        return c.JSON(http.StatusOK, p)
    })

    api.POST("/contact", func(c echo.Context) error {
        var payload struct {
            Name    string `json:"name"`
            Email   string `json:"email"`
            Message string `json:"message"`
        }
        if err := c.Bind(&payload); err != nil {
            return c.JSON(http.StatusBadRequest, map[string]string{"error": "invalid payload"})
        }

        // ここでは受け取った内容をそのまま返すダミー実装
        return c.JSON(http.StatusOK, map[string]any{
            "ok":      true,
            "received": payload,
        })
    })
}


