/**
 * Object containing role names and corresponding role codes.
 *
 * @typedef {Object} RolesList
 * @property {number} Admin - The role code for the Admin role.
 * @property {number} Editor - The role code for the Editor role.
 * @property {number} User - The role code for the User role.
 */

/**
 * List of roles with corresponding role codes.
 *
 * @type {RolesList}
 */

type rolesListT = {
    [key: string]: number
}

const ROLES_LIST: rolesListT = {
    /**
     * The role code for the Admin role.
     * @type {number}
     */
    "Admin": 8505,
    /**
     * The role code for the Editor role.
     * @type {number}
     */
    "Editor": 3540,
    /**
     * The role code for the User role.
     * @type {number}
     */
    "User": 2130
};

export default ROLES_LIST;