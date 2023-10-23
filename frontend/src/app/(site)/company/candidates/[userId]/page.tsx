"use client";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Suspense } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";

import ProfilePreview from "@/components/site/candidateProfile/profileView";
import Notes from "@/components/site/companyNotes/Notes";

type Params = {
  params: {
    userId: string;
  };
};

//TODO: move api call or pass userId down to component

export default function UserProfilePage({params:{userId}}:Params) {

 //Todo: use userId to get the user/candidate details
  
  return (
    <>
      <Grid container sx={{ mb: 4 }}>
        <Grid item md={6}>for testing: {userId}</Grid>
        <Grid item md={6} sx={{ textAlign: "right" }}>
          <Link href="/company/candidates/">
            <Button
              startIcon={<ArrowBackIcon />}
              variant="outlined"
              sx={{ textTransform: "none" }}
            >
              Go back
            </Button>
          </Link>
        </Grid>
      </Grid>

      <ProfilePreview />
      <Notes company_id={"1"} candidate_id={"1"} />
    </>
  );
}
