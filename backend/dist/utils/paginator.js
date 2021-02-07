"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginator = void 0;
const paginator = (page, pageSize) => {
    const offset = page * pageSize;
    const limit = pageSize;
    return {
        offset,
        limit,
    };
};
exports.paginator = paginator;
//# sourceMappingURL=paginator.js.map