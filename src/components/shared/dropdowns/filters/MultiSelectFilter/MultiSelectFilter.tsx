'use client'
import React, { useState, useEffect } from "react"
import { MultiSelect } from '@mantine/core'
import classes from './MultiSelectFilter.module.css'
import { Option } from "@/utils/types/option"

interface MultiSelectFilterSettings {
  title: string;
  options: Option[];
  setData: (data: any) => void;
}

const MultiSelectFilter = (props: MultiSelectFilterSettings) => {

  return (
    <MultiSelect
      classNames={{
        wrapper: classes.wrapper,
        dropdown: classes.dropdown,
        input: classes.input,
        label: classes.label,
        options: classes.options,
      }}
      label={props.title}
      data={props.options}
      onChange={props.setData}
      variant="standard"
      clearable={true}
    />
  )
}



export default MultiSelectFilter