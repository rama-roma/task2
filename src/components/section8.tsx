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
import { useTranslations } from "next-intl";

const Section8 = () => {
  const t = useTranslations("HomePage");
  return (
    <>
      <div className="hidden md:block">
        <section className="mt-[50px] mb-30 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 px-4 md:px-20">
          <div className="flex flex-col gap-[20px] max-w-[600px]">
            <h1 className="text-[50px] font-medium">
              {t("text18")}{" "}
              <span className="text-[#24AB70]">{t("text17")}</span>
            </h1>
            <p className="w-100">{t("text19")}</p>
          </div>
          <div>
            <Accordion>
              <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">{t("text20")}</Typography>
              </AccordionSummary>
              <AccordionDetails>{t("text21")}</AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography component="span">{t("text20")}</Typography>
              </AccordionSummary>
              <AccordionDetails>{t("text21")}</AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography component="span">{t("text20")}</Typography>
              </AccordionSummary>
              <AccordionDetails>{t("text21")}</AccordionDetails>
              <AccordionActions>
                <Button>Cancel</Button>
                <Button>Agree</Button>
              </AccordionActions>
            </Accordion>
          </div>
        </section>
      </div>

      <div className="block md:hidden">
        <section className="mt-[40px] mb-20 flex flex-col gap-6 px-4">
          <div className="flex flex-col gap-[15px]">
            <h1 className="text-[32px] font-medium leading-tight">
              {t("text18")}{" "}
              <span className="text-[#24AB70]">{t("text17")}</span>
            </h1>
            <p className="text-sm leading-relaxed">{t("text19")}</p>
          </div>

          <div className="flex flex-col gap-3">
            <Accordion>
              <AccordionSummary aria-controls="m-panel1-content">
                <Typography component="span">{t("text20")}</Typography>
              </AccordionSummary>
              <AccordionDetails>{t("text21")}</AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary aria-controls="m-panel2-content">
                <Typography component="span">{t("text20")}</Typography>
              </AccordionSummary>
              <AccordionDetails>{t("text21")}</AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary aria-controls="m-panel3-content">
                <Typography component="span">{t("text20")}</Typography>
              </AccordionSummary>
              <AccordionDetails>{t("text21")}</AccordionDetails>
            </Accordion>
          </div>
        </section>
      </div>
    </>
  );
};

export default Section8;
