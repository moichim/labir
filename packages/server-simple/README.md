# API for thermal images storage

Upload the `index.php` to an Apache2 server along with folders of LRC files. 

This `index.php` will expose information about the folder contents in multiple routes specified below;

The API is currently used by `@labir/webcomponents` and `@labir/wordpress`.

## Data structure

```
/.../index.php                    <-- the PHP file in the root

/.../folder_A/                    <-- put content in folders
/.../folder_A/_info.txt           <-- an optional info file
/.../folder_A/thermogram_1.lrc
/.../folder_A/thermogram_2.lrc
/.../folder_A/thermogram_2.png    <-- an optional PNG

/.../folder_B/                    <-- there can be any number of folders
/.../folder_B/_info.txt
/.../folder_B/thermogram_XYZ.lrc

/.../folder_C/
/.../folder_C/_info.txt
/.../folder_C/thermogram_ABC.lrc
```

## Api routes

- `/` = info about folders
- `/?everything` = info & content of all folders
- `/?{folder_name}` = content of a folder
- `/?hours` = all files by hours
- `/?days` = all files by days
- `/?weeks` = all files by hours
- `/?months` = all files by months
- `/?years` = all files by years
- `/?groups` = all files by hours, days, weeks, months and years

## Optional parameters

### `only` and `exclude` to say which groups you want

You may tell which groups you want using `only` and `exclude` parameters. Example:

`/.../?days&exclude=group_a,group_b`

= Will show all files only from groups `group_a` and `group_b`.

`/.../?days&exclude=group_c`

= Will show all files from all groups except of `group_c`.

Note: `only` and `exclude` applies on every route (even on `/` ).

### `grid` to say you need to fill empty space

In time based routes (`hours`, `days`, `weeks`,...), you will find only existing files in the groups. That is OK, but it is not good if you want to make a table out of images. In a table where a row is a time interval, you need to have empty cells for groups, that happen not to have files in this time.

Setting `grid` enables filled empty spaces so that you can build a table out of data iteratively.

`/.../?weeks&grid`

= Will show all files from all folders grouped by weeks. In case a group does not contain a file in a week, an empty record is still present in the group.

## Dates & timestamps

The file reads timestamps from the content of LRC files using the same algorhythm as `@labir/core/src/loading/workers/parsers/lrc/jobs/baseInfo.ts`.