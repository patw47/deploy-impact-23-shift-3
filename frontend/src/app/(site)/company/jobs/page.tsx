"use client";
import * as React from "react";
import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { SearchBar } from "@/app/(site)/company/searchBar";
import { JobList } from "@/app/(site)/company/jobs/jobList";
import { JobPost, JobPostNew } from "@/app/(site)/company/jobs/types";
import getJobPosts from "@/app/(site)/company/jobs/fetchJobPosts";
import Button from "@mui/material/Button";
import { usePostedJobs } from "@/app/(site)/company/jobs/usePostedJobs";

export default function CandidatesPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const jobPostsList: JobPost[] = getJobPosts();
  const jobPostsListNew: JobPostNew[] = usePostedJobs("1");

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "-20px 0 0 0",
          gap: "36px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {jobPostsList.length > 0 && (
            <SearchBar
              searchTerm={searchTerm}
              onSearch={setSearchTerm}
              placeholder={"Search for job post"}
            />
          )}
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{ textTransform: "none", borderRadius: "100px" }}
          >
            + Create new job
          </Button>
        </Box>
        <JobList jobPosts={jobPostsList} />
      </Box>
    </Container>
  );
}
