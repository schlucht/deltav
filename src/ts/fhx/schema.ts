import { fhxBoolean } from './types'
export class Schema {
    user = ''
    time = 0
    versionTime = 0
    major_version = 0
    minor_version = 0
    maintenance_version = 0
    build_version = 0
    build_id = ''
    version_str = ''
    online_upgrade: fhxBoolean = "F"

    constructor(public text: string) {}

    readSchema() {
        
    }
}