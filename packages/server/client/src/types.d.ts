export type Identity = {

    user: string,
    path: string,
    token: string,
    meta: {
        login: string,
        name: string,
        description: string | null,
        institution: string | null,
        access: string[]
    }

}

export type TagInfo = {
    name: string,
    description?: string | null,
    color?: string | null
}

export interface FolderInfo {
  entity: "folder";
  api: string;
  path: string;
  slug: string;
  name: string;
  description: string | null;
  data: Record<string, any>;
  lrc_count: number;
  protected: boolean;
  may_have_files?: boolean;
  own_tags: [] | {
    [index: string]: TagInfo;
  };
  parent_tags: [] | {
    [index: string]: TagInfo;
  };
}

export interface FileInfo {
  entity: "file",
  url: string,
  label: string | null,
  description: string | null,
  fileName: string,
  folder: string,
  parent: string,
  path: string,
  visual: string | false,
  preview: string | false,
  timestamp: number,
  uploaded: number,
  tags: string[],
  dateHuman: string,
  apiRoot: string,
  analyses: string[]
}

export type TagDefinition = {
  slug: string,
  count: number,
  meta?: {
    name?: string,
    description?: string,
    color?: string
  }
}

export type TagDefinitions = {
  [index: string]: TagDefinition;
}

export type TagWithContent = TagDefinition & {
  folders: {
    [index:string]: FileInfo[]
  }
}

export type TagsWithContent = {
  [index: string]: TagWithContent;
}
