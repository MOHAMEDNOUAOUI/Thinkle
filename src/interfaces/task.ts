export const Status = {
  TODO: "TO-DO",
  IN_PROGRESS: "IN-PROGRESS",
  REVIEW: "REVIEW",
  DONE: "DONE",
} as const;
export const Priority = {
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  HIGH: "HIGH",
} as const;

export type Priority = (typeof Priority)[keyof typeof Priority];
export type Status = (typeof Status)[keyof typeof Status];

export interface Task {
  _id?: string;
  label?: string;
  description?: string;
  status?: Status;
  tags: Tags[];
  taskTool?: string;
  priority?: Priority;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Tags {
  _id?: string;
  label?: string;
  description?: string;
}

// Status enum defined above

//  ["TO-DO" , "IN-PROGRESS" , "REVIEW" , "DONE"], // make this enum Status
