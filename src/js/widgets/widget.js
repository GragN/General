import { data } from "./data";
import { model_1, model_2, model_3, model_4 } from "./functions";

export default class Popover {
  constructor(element) {
    this.element = element;

    this.popover = this.popover.bind(this);
    this.select_fun = this.select_fun.bind(this)
    this.select_fun1 = this.select_fun1.bind(this)

    this.btn = this.element.querySelector(".btn");
    this.btn.addEventListener("click", this.popover);

    this.select = this.element.querySelector('.select')
    this.select.addEventListener('click', this.select_fun)

    this.select1 = this.element.querySelector('.select1')
    this.select1.addEventListener('click', this.select_fun1)

    this.input = this.element.querySelector('.input')

    this.img = this.element.querySelector('.img')
    this.img1 = this.element.querySelector('.img1')

    this.span = this.element.querySelector('.span5')
  }

  select_fun() {
    const select_value = this.select.value
    // console.log(select_value)
    if (select_value == 'model_1') {
      this.input.value = ''
      this.input.placeholder = '"z": 1, "qh": 1, "qH": 1, "f": 1, "S0": 1'

      this.img.src = 'model_1.png'
      this.img1.src = ''

      this.select1.innerHTML = ''
      for (let x = 0; x < data.model_1.length; x ++) {
        const p = document.createElement("option");
        this.select1.appendChild(p)
        p.innerHTML = `"z": ${data.model_1[x].z}, "qh": ${data.model_1[x].qh}, "qH": ${data.model_1[x].qH}, "f": ${data.model_1[x].f}, "S0": ${data.model_1[x].S0}`
      }

    } else if (select_value == 'model_2') {
      this.input.value = ''
      this.input.placeholder = '"b": 1, "fj": 1'

      this.img.src = 'model_2.png'

      this.select1.innerHTML = ''
      for (let x = 0; x < data.model_2.length; x ++) {
        const p = document.createElement("option");
        this.select1.appendChild(p)
        p.innerHTML = `"b": ${data.model_2[x].b}, "fj": ${data.model_2[x].fj}`
      }

    } else if (select_value == 'model_3') {
      this.input.value = ''
      this.input.placeholder = '"A": 1, "B": 1, "q3": 1'

      this.img.src = 'model_3.png'

      this.select1.innerHTML = ''
      for (let x = 0; x < data.model_3.length; x ++) {
        const p = document.createElement("option");
        this.select1.appendChild(p)
        p.innerHTML = `"A": ${data.model_3[x].A}, "B": ${data.model_3[x].B}, "q3": ${data.model_3[x].q3}`
      }

    } else if (select_value == 'model_4') {
      this.input.value = ''
      this.input.placeholder = 'i = 1, j = 1, g = 1'

      this.select1.innerHTML = ''
      for (let x = 0; x < data.model_4.length; x ++) {
        const p = document.createElement("option");
        this.select1.appendChild(p)
        p.innerHTML = `i = ${data.model_4[x].i}, j = ${data.model_4[x].j}, g = ${data.model_4[x].g}`
      }

    }
  }

  select_fun1 () {
    // console.log(typeof(this.select1.value))
    this.input.value = this.select1.value
  }

  popover() {
    console.log('кнопка работает')

    if (this.select.value == 'model_1') {
      let obj = `{${this.input.value}}`
      let obj1 = JSON.parse(obj)
      this.span.innerHTML = `${model_1(obj1.z, obj1.qh, obj1.qH, obj1.f, obj1.S0)}`

      this.img1.src = 'after_1.png'

    } else if (this.select.value == 'model_2') {
      let obj = `{${this.input.value}}`
      let obj1 = JSON.parse(obj)
      this.span.innerHTML = `${model_2(obj1.b, obj1.fj)}`

      this.img1.src = 'after_2.png'

    } else if (this.select.value == 'model_3') {
      let obj = `{${this.input.value}}`
      let obj1 = JSON.parse(obj)
      this.span.innerHTML = `${model_3(obj1.A, obj1.B, obj1.q3)}`

      this.img1.src = ''

    }

    // let obj = `{${this.input.value}}`
    // let obj1 = JSON.parse(obj)
    
    // console.log(model_2(obj1.b, obj1.fj))

  }
}
