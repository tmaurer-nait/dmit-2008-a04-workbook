import { useState, useEffect } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import LoadingCircle from "@components/LoadingCircle";
import NavBar from "@components/NavBar";
import SimpleDetailsCard from "@components/SimpleDetailsCard";

import { getAgency } from "@utils/api/agencies";

export async function getServerSideProps(context) {
  const { id } = context.params;

  const agencyInfo = await getAgency(id);

  return {
    props: {
      agencyDetails: agencyInfo,
    },
  };
}

export default function Agency(props) {
  const router = useRouter();

  return (
    <>
      <NavBar />
      {!props.agencyDetails ? (
        <LoadingCircle />
      ) : (
        <Container sx={{ paddingTop: 2 }}>
          <Grid container>
            <Grid item xs="2">
              <img
                alt={props.agencyDetails.name}
                src={props.agencyDetails.logo_url}
                style={{
                  width: `120px`,
                }}
              />
            </Grid>
            <Grid item xs="10">
              <Typography variant="h3" gutterBottom>
                {`${props.agencyDetails.name} (${props.agencyDetails.abbrev})`}
              </Typography>
            </Grid>
            <Grid item xs="4">
              <Typography variant="h5">Launch Details</Typography>
              <SimpleDetailsCard
                title={"Total Launches"}
                description={props.agencyDetails.total_launch_count}
                subDescription={""}
              />
              <SimpleDetailsCard
                title={"Successful Launches"}
                description={props.agencyDetails.successful_launches}
                subDescription={""}
              />
              <SimpleDetailsCard
                title={"Successful Landings"}
                description={props.agencyDetails.successful_landings}
                subDescription={""}
              />
            </Grid>
            <Grid item xs="4">
              <Typography variant="h5">Agency Information</Typography>
              <SimpleDetailsCard
                title={"Adminastrator"}
                description={props.agencyDetails.administrator}
                subDescription={""}
              />
              <SimpleDetailsCard
                title={"Space Agency Details"}
                description={`Founded: ${props.agencyDetails.founding_year}`}
                subDescription={props.agencyDetails.description}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5">Spacecraft</Typography>
              {props.agencyDetails.spacecraft_list &&
                props.agencyDetails.spacecraft_list.map((spacecraft) => {
                  return (
                    <SimpleDetailsCard
                      key={spacecraft.id}
                      title={spacecraft.name}
                      description=""
                      subDescription=""
                      buttonCallback={() => {
                        router.push(`/spacecraft/${spacecraft.id}`);
                      }}
                      buttonName="Go to Spacecraft"
                    />
                  );
                })}
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}
