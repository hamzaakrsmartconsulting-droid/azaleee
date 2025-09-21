import React from "react";

export default function CMSLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <title>Azalée CMS</title>
        <meta name="description" content="Interface d'administration Azalée Patrimoine" />
      </head>
      <body>
          {children}
      </body>
    </html>
  );
}
