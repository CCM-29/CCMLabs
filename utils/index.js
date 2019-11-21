import R from 'ramda';

class Util {
    static pickFields(rol) {
        const commonFields = ['email', 'name', 'status'];
        switch (rol) {
            case 'editor': {
                const editorFields = ['clientAssignEditor'];
                return R.pick([...commonFields, ...editorFields]);
            }
            case 'operator':
            case 'client': {
                const editorFields = ['favorites', 'workspace'];
                return R.pick([...commonFields, ...editorFields]);
            }
            case 'admin': {
                return R.pick([...commonFields]);
            }
            default: {
                return false;
            }
        }
    }
    static isEqual(...args) {
        return R.equals.apply(null, args);
    }

    static filterEqualsBy(comparator) {
        return R.filter(R.isEqual(comparator));
    }
}

module.exports = Util;
