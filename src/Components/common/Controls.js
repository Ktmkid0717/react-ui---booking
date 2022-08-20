import React from "react"

export  const controlList=[
    {
        controlGroup:[],
    control_list: [],
    data_type: "text",
    description: "Main Applicant.",
    disabled: false,
    identifier: "MainApplicant",
    isUnique: false,
    label: "Main Applicant",
    maxItems: 5,
    minItems: 1,
    regex: undefined,
    required: false,
    type: "object",
    value: "",
    },{
    controlGroup:[],
    control_list: [
        {data_type: "text",
        description: "",
        disabled: false,
        identifier: "VolumeName",
        label: "VolumeName",
        regex: undefined,
        required: true,
        type: "textarea",
        value: ""},
    ],
    data_type: "text",
    description: "co Applicant.",
    disabled: false,
    identifier: "CoApplicant",
    isUnique: false,
    label: "Co Applicant",
    maxItems: 5,
    minItems: 1,
    regex: undefined,
    required: false,
    type: "addable_group_array",
    value: "",
    }

]