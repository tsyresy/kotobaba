import React, { useEffect } from "react";
/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import MuiAvatarGroup from "@mui/material/AvatarGroup";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKAvatar from "components/MKAvatar";

// Images
import team1 from "assets/images/team-1.jpg";
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";

function AvatarGroup() {
  useEffect(() => {
    function startCountdown(durationInSeconds, display) {
      let timer = durationInSeconds,
        minutes,
        seconds;
      const interval = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "Temps restant: " + minutes + ":" + seconds;

        if (--timer < 0) {
          clearInterval(interval);
          display.textContent = "L'offre a expiré!";
        }
      }, 1000);
    }

    const display = document.getElementById("countdown");
    if (display) {
      startCountdown(9 * 60, display);
    }
  }, []);
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            Commande en cours
            <span
              id="countdown"
              style={{ fontSize: "35px", color: "red", fontWeight: "bold" }}
            ></span>
            <h2>Les cinq avantages d’un compte PayPal Pro vérifié :</h2>
            <ol style={{ paddingLeft: "20px" }}>
              <li>Transactions rapides et sécurisées pour vos paiements en ligne.</li>
              <li>Support client prioritaire et professionnel 24/7.</li>
              <li>Intégration simple avec vos boutiques en ligne.</li>
              <li>Réduction des frais supplémentaires pour les paiements professionnels.</li>
              <li>Renforcement de la crédibilité et de la confiance de vos clients.</li>
            </ol>
          </Grid>
          <Grid item xs={12} md={8} style={{ margin: "0 auto" }}>
            <div style={{ position: "relative", overflow: "hidden", borderRadius: "8px" }}>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                }}
              >
                <img src={team1} alt="team 1" style={{ width: "100%", aspectRatio: "16/9" }} />
              </div>
            </div>
            <style>
              {`
                @keyframes slide {
                  0%, 25% { transform: translateX(0); }
                  26%, 50% { transform: translateX(-100%); }
                  51%, 75% { transform: translateX(-200%); }
                  76%, 100% { transform: translateX(-300%); }
                }
              `}
            </style>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center", marginTop: "24px" }}>
            <button
              style={{
                padding: "12px 24px",
                backgroundColor: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                fontSize: "16px",
                cursor: "pointer",
                transition: "all 150ms ease-in-out",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#007BFF")}
            >
              Passer ma commande
            </button>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AvatarGroup;
