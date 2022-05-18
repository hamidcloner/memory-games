export const sizes = {
    xs : '576px',
    sm : '576px',
    md : '768px',
    lg : '992px',
    xl : '1200px',
    xxl : '1400px',
}


export default {
    xs_device : `(max-width : ${sizes.xs})`,
    sm_device : `(min-width : ${sizes.sm})`,
    md_device : `(min-width : ${sizes.md})`,
    lg_device : `(min-width : ${sizes.lg})`,
    xl_device : `(min-width : ${sizes.xl})`,
    xxl_device : `(min-width : ${sizes.xxl})`,
}