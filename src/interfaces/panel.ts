export interface PanelItems {
  title?: string;
  icon?: string;
  childs?: PanelItems[];
  isActive: boolean;
  lengthItem?: number;
  path: string;
}

export interface PanelResponse {
  panel: PanelItems[];
}
