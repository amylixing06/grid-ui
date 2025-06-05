"use client";

import { LuAlignVerticalSpaceAround } from "react-icons/lu";
import { ItemConfig } from "../dataTypes";

export const itemsConfig: ItemConfig[] = [
   {
      itemType: "dropdown",
      dropDownType: "combine",
      dropDownSeparator: " / ",
      combineData: [
         {
            key: "gridColumnStart",
            title: "起始列",
            description:
               "Specifies the starting column for an element within the grid.",
            type: "input",
            inputType: "number",
         },
         {
            key: "gridColumnEnd",
            title: "结束列",
            description:
               "Specifies the ending column for an element within the grid.",
            type: "input",
            inputType: "number",
         },
      ],
      key: "gridColumn",
      title: "网格列",
      description:
         "Defines the start and end columns for an element in the grid.",
      icon: LuAlignVerticalSpaceAround,
      type: "input",
      inputType: "number",
      defaultValue: "0 / 0",
   },
   {
      itemType: "dropdown",
      dropDownType: "combine",
      dropDownSeparator: " / ",
      combineData: [
         {
            key: "gridRowStart",
            title: "起始行",
            description:
               "Specifies the starting row for an element within the grid.",
            type: "input",
            inputType: "number",
         },
         {
            key: "gridRowEnd",
            title: "结束行",
            description:
               "Specifies the ending row for an element within the grid.",
            type: "input",
            inputType: "number",
         },
      ],
      key: "gridRow",
      title: "网格行",
      description: "Defines the start and end rows for an element in the grid.",
      icon: LuAlignVerticalSpaceAround,
      type: "input",
      inputType: "number",
      defaultValue: "0 / 0",
   },
   {
      key: "justifySelf",
      title: "水平对齐自身",
      description:
         "Controls horizontal alignment of an element within its grid container.",
      icon: LuAlignVerticalSpaceAround,
      type: "select",
      options: ["stretch", "start", "center", "end"],
      defaultValue: "stretch",
   },
   {
      key: "alignSelf",
      title: "垂直对齐自身",
      description:
         "Controls vertical alignment of an element within its grid container.",
      icon: LuAlignVerticalSpaceAround,
      type: "select",
      options: ["stretch", "start", "center", "end"],
      defaultValue: "stretch",
   },
   {
      key: "width",
      title: "宽度",
      description: "Specifies the width of an element, including unit options.",
      icon: LuAlignVerticalSpaceAround,
      type: "input",
      inputType: "unit",
      unitOptions: ["auto", "px", "%"],
      defaultValue: "auto",
   },
   {
      key: "height",
      title: "高度",
      description:
         "Specifies the height of an element, including unit options.",
      icon: LuAlignVerticalSpaceAround,
      type: "input",
      inputType: "unit",
      unitOptions: ["auto", "px", "%"],
      defaultValue: "auto",
   },
];