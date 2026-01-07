"use client";
import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  AccordionActions,
  Button,
} from "@mui/material";

const Section8 = () => {
  return (
    <>
      <div className="hidden md:block">
        <section className="mt-[50px] mb-30 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 px-4 md:px-20">
          <div className="flex flex-col gap-[20px] max-w-[600px]">
            <h1 className="text-[50px] font-medium">
              Frequently Asked <span className="text-[#24AB70]">Questions</span>
            </h1>
            <p className="w-100">
              You can book massages 7 days a week from 6 am to 11 pm, including
              public holidays.
            </p>
          </div>
          <div>
            <Accordion>
              <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography component="span">Accordion 2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography component="span">Accordion Actions</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
              <AccordionActions>
                <Button>Cancel</Button>
                <Button>Agree</Button>
              </AccordionActions>
            </Accordion>
          </div>
        </section>
      </div>

      <div className="block md:hidden flex flex-col gap-6 p-4">
        <section className="flex flex-col gap-6">
          {/* Заголовок */}
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-medium">
              Frequently Asked <span className="text-[#24AB70]">Questions</span>
            </h1>
            <p className="text-sm text-gray-600 max-w-xs mx-auto">
              You can book massages 7 days a week from 6 am to 11 pm, including
              public holidays.
            </p>
          </div>

          {/* Аккордеоны */}
          <div className="flex flex-col gap-2">
            <Accordion>
              <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography component="span">Accordion 2</Typography>
              </AccordionSummary>
              <AccordionDetails className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
              <AccordionSummary
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography component="span">Accordion Actions</Typography>
              </AccordionSummary>
              <AccordionDetails className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
              <AccordionActions>
                <Button size="small">Cancel</Button>
                <Button size="small">Agree</Button>
              </AccordionActions>
            </Accordion>
          </div>
        </section>
      </div>
    </>
  );
};

export default Section8;
