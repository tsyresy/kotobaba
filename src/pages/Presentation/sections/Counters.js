// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={12950}
              suffix="+"
              title="Clients satisfaits"
              description="Une satisfaction exceptionnelle des clients,
               obtenue grâce à des qualités de service irréprochable"
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={5000}
              suffix="+"
              title="Followers sur les réseaux sociaux"
              description="Des milliers d'utilisateurs nous suit sur toutes les plateformes"
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={45}
              suffix="+"
              title="Prestations, Services & Formations disponibles"
              description="Nous offrons des prestations adaptées à vos besoins : Gestion des réseaux sociaux, assistance virtuelle, graphisme, web design et échange de solde PayPal. Notre expertise garantit des solutions rapides, créatives et efficaces pour vous faire gagner du temps et maximiser vos résultats."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
