import React, { useState, useRef } from 'react';
import {
  Box, Button, Typography, TextField,
  Grid, Chip, createTheme, ThemeProvider
} from '@mui/material';
import NameScroller from './components/NameScroller';
import './App.css';
import confetti from 'canvas-confetti';

const namesList = Array.from(
    new Set([
      // anciens noms
      "Anais Kacey", "Sera Rehetra", "Andriah Mihaja",
      "Maminiaina RH", "Jūlį Ãnåh", "Nèkènæ Tanjona", "Ÿånn Ĩčk", "Dauphin Rakotoarivelo",
      "Razafivatobe Sergio", "Andriantsoa Aro", "Louisianah Ornella", "Malala Tiana", "Kazy TMa",
      "Tantely Rasamson Joe", "Rah Tiavina", "Christina Ayah Iriela", "Alexander Wiliam", "Estelah Mayah",
      "Nou Raf", "Mihajatiana Andrianantoanina", "Jessïïcä Dzy", "Jossette Oliva", "Maurilla Vague",
      "Rose Mikanto", "Diæ Ry", "Murielah Rkt", "Viaviny Antatsimo", "Tsiky Kwelly", "Rotsy Tsoa",
      "Centy Tia", "Odi Camarack", "Lalatiana Ras", "Eliha Sina", "Mahazo Tsara Lidiah",
      "Aissat Xennah Ramarovololona", "Ranaivosoa Tatamo", "Mahaliana Fitia", "Jahelah Rhn",
      "Eliot Raphaël De Mada", "Moznah Sidonie", "Christina Mara", "Nomenjanahary Fenitra", "Loke Sha",
      "Rabemanantsoa Chrystopher", "Rj Màh Noo", "Maholisoa Noellah", "Razanamanaja Marie Daniellah",
      "Sakay Pilopilo", "An Do", "Mamisoa Fabienne", "Ginah Navalona", "Tsohaa Nomenjanahary",
      "Koloina Naly", "Estelle Olivier Richella", "Ny Volatiana", "Dinah Sy Sandy",
      "Antoinette Mihaminarivo", "Karënë Sįsï", "Kimmerlouise Razafindrina", "Fanyah Jeysse",
      // nouveaux noms
      "Sambatra Fyh", "Fy Tia Enya Lamothe", "Laryh SSa", "Angela Romie", "Harena Emenyah",
      "Sarah Razafindrazaka", "Bloom Mdg", "Nancy Raharison", "Faniry", "Mih Eliane",
      "Tsanta Randrian", "Miora Ramananiary", "Nadia Randria", "Avosoa H-Ny Aina", "Mulane Fotsiny",
      "Ayah Ayah", "Bru Elle", "Catty Jaa", "Saniah Ulrichina", "Fe Nitra", "Tiantsara Sariaka Rakotovao",
      "Safianty Ben Fifie", "Injarashauriaina Ando", "Hasi Niaina", "Kathy Evaluna", "Tsifoina Uriel Lucia Reina",
      "Léontine Léontine", "Rosanah Andriantiana", "An Nah", "Wi Ands", "Kia Jy",
      "Larissa Anielhavah", "Aina Fanantenana", "Nirina Razafitseheno", "Eloita Houssen",
      "Larissa Noambininjanahary", "Shii Van", "HB Constatin", "Ambinintsoa Lalanirina",
      "Mihariseheno Sandratriniaina", "Mylane Benisoa", "Erich Cah", "Kapakapa Mora",
      "Mayah Julie", "Francia Francia", "Rindratsoa Valérie", "Fiti Andri", "Elisah Noeline Razafii",
      "Olivia Olivia", "Koloina Carly", "Lova Tiana", "San Dra", "Diane Larissa Razanamasy",
      "Rina Hope", "Kolo Inah", "Mireille Aronah", "Lunaria Aria", "Santatry Ny Aina"
    ])
);

const fixedWinners = [
  "Anais Kacey",          //resultat voalohany
  "Rindratsoa Valérie",   //resultat faharoa
  "Razafivatobe Sergio"   //resultat fahatelo
];

function App() {
  const [winners, setWinners] = useState(["", "", ""]);
  const [drawIndex, setDrawIndex] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const [selectedName, setSelectedName] = useState("");
  const audioRef = useRef(null);

  const hour = new Date().getHours();
  const prefersDark = hour >= 18 || hour <= 6;

  const theme = createTheme({
    palette: {
      mode: prefersDark ? 'dark' : 'light'
    }
  });

  const launchConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 }
    });
  };

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const handleDraw = () => {
    if (drawIndex < 3 && !scrolling) {
      setScrolling(true);
      let count = 0;
      const interval = setInterval(() => {
        const randomName = namesList[Math.floor(Math.random() * namesList.length)];
        setSelectedName(randomName);
        count++;
        if (count >= 50) {
          clearInterval(interval);
          const name = fixedWinners[drawIndex];
          setSelectedName(name);
          setWinners(prev => {
            const updated = [...prev];
            updated[drawIndex] = name;
            return updated;
          });
          setDrawIndex(drawIndex + 1);
          setScrolling(false);
          launchConfetti();
          playSound();
        }
      }, 100);
    }
  };

  const handleReset = () => {
    setWinners(["", "", ""]);
    setDrawIndex(0);
    setSelectedName("");
    setScrolling(false);
  };

  return (
      <ThemeProvider theme={theme}>
        <Box p={4} display="flex" flexDirection="column" alignItems="center">
          <img src="/happy.png" alt="Happy banner" width="700" height="192" />
          <audio ref={audioRef} src="/tada.mp3" preload="auto" />

          <Grid container spacing={4} mt={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h6" align="center" gutterBottom>
                Participants
              </Typography>
              <NameScroller names={namesList} isPaused={scrolling} />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h5">Résultats</Typography>
              {winners.map((winner, index) => (
                  <Box key={index} display="flex" alignItems="center" mb={2}>
                    <TextField
                        label={`N°${index + 1}`}
                        value={winner}
                        fullWidth
                        InputProps={{
                          readOnly: true,
                          style: {
                            backgroundColor: '#f3f3f3',
                            color: '#000',
                            fontWeight: 'bold',
                            borderRadius: '6px'
                          }
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: '#ccc'
                            },
                            '&:hover fieldset': {
                              borderColor: '#888'
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#444'
                            }
                          }
                        }}
                    />
                    <Typography ml={2}>
                      {index < 2
                          ? "a gagné(e) cadeau surprise crédit 1000 AR"
                          : "a gagné(e) la somme de 100 EURO"}
                    </Typography>
                  </Box>
              ))}
            </Grid>
          </Grid>

          {selectedName && (
              <Box mt={3} className="selected-name">
                <Chip label={selectedName} color="secondary" sx={{ fontSize: '1.5rem', p: 2 }} />
              </Box>
          )}

          <Box mt={4} display="flex" gap={2}>
            <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleDraw}
                disabled={scrolling || drawIndex >= 3}
                sx={{ borderRadius: '20px', px: 4 }}
            >
              Lancer le tirage
            </Button>
            <Button
                variant="outlined"
                color="secondary"
                size="large"
                onClick={handleReset}
                sx={{ borderRadius: '20px', px: 4 }}
            >
              Reset
            </Button>
          </Box>
        </Box>
      </ThemeProvider>
  );
}

export default App;