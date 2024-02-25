export default class Option {
    constructor () {
    }

    option () {
        let options = {
            // позицияя камеры по x
            camera_position_z: 80,
            // число кубов
            number_of_cubes: {x: 20, y: 20, z: 20},
            // расстояние мужду кубами
            distance: 1.1,
            // размер сторон кубов
            geometry: 1,
        }

        return options
    }
}