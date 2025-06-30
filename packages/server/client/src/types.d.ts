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
