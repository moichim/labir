import { expect } from "vitest";

// Helper function to validate FolderInfo structure
export function testFolderInfo(folder: any) {
    expect(folder).toHaveProperty("entity", "folder");
    expect(typeof folder.api).toBe("string");
    expect(typeof folder.path).toBe("string");
    expect(typeof folder.slug).toBe("string");
    expect(typeof folder.name).toBe("string");
    expect(["string", "object"].includes(typeof folder.description)).toBe(true);
    expect(typeof folder.data).toBe("object");
    expect(typeof folder.lrc_count).toBe("number");
    expect(typeof folder.protected).toBe("boolean");
    if (folder.may_have_files !== undefined) {
        expect(typeof folder.may_have_files).toBe("boolean");
    }
    if (folder.own_tags !== undefined) {
        expect(typeof folder.own_tags).toBe("object");
    }
    if (folder.parent_tags !== undefined) {
        expect(typeof folder.parent_tags).toBe("object");
    }
}