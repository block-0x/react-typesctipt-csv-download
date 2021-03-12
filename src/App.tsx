import React, { useState } from 'react';
import { CSVLink, CSVDownload } from "react-csv";

interface Props {
}

const csvData = [
  ["firstname", "lastname", "email"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"]
];

export default function App(props: Props): JSX.Element {

  return (
    <>
      <CSVLink data={csvData}>Download me</CSVLink>
      <CSVDownload data={csvData} target="_blank" />;
    </>
  );
}
