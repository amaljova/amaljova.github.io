import { GanttChartSquare, Microscope, BrainCircuit } from "lucide-react";

const interestsData = [
    {
      icon: <Microscope size={72} strokeWidth={0.8} />,
      title: "Reserarch",
      description: "My current research focuses on Imaging Biomarkers and Radiomics in Radiation Oncology.",
    },
    {
      icon: <BrainCircuit size={72} strokeWidth={0.8} />,
      title: "Artificail Intelligence",
      description: "I build predictive AI models for cancer recurrence prognostication and Gross Tumour Volume segmentation from CT images.",
    },
    {
      icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
      title: "Web Development",
      description: "This is just a hobby that I enjoy.",
    },
  ];

export default interestsData;