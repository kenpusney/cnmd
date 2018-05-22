
import "mocha"
import { expect } from "chai"

import * as marked from "marked"

import CnmdRenderer from "./CnmdRenderer"

const renderer = new CnmdRenderer()

describe("CNMD Renderer", () => {
    it("should generate link to wikipedia",() => {
        let link = renderer.link("", "", "wiki:hello");

        expect(link).equal('<a href="https://en.wikipedia.org/wiki/hello" title="hello">hello</a>')
    })

    it("should generate link to github", () => {
        let link = renderer.link("", "", "github:kenpusney/cnmd");

        expect(link).equal('<a href="https://github.com/kenpusney/cnmd" title="kenpusney/cnmd">kenpusney/cnmd</a>')
    })
})