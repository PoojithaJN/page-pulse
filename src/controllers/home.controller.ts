import { Request, Response } from "express";

export const home = (_req: Request, res: Response) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Page Pulse API</title>
    </head>
    <body style="font-family:Arial;padding:40px;">
      <h1>🚀 Page Pulse API</h1>

      <p>Production-ready URL Audit Service</p>

      <h3>Available Endpoints</h3>

      <ul>
        <li>GET /</li>
        <li>GET /health</li>
        <li>POST /audit</li>
      </ul>

      <hr>

      <footer>
        Built for
        <a href="https://digitalheroesco.com" target="_blank">
          Digital Heroes Training Task
        </a>
      </footer>

    </body>
    </html>
  `);
};