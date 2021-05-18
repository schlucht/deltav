import { UploadFHX } from "./upload";

const up = <HTMLInputElement>document.querySelector("input[type=file]")


const loadData = (e: Event) => {
    const f = e.target.files[0]
    const r = new FileReader()
    r.addEventListener('load', (loadedEvent) => {
        var txt = loadedEvent.target.result as string
        const fhx = new UploadFHX(txt)
    })
    r.readAsText(f, 'UTF-8')
}
up.addEventListener('change', loadData)



