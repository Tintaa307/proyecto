import RutinesModel from "../models/rutinesModel.js"

// obtener todas las rutinas

export const getAllRutines = async (req, res) => {
  try {
    const rutines = await RutinesModel.findAll()
    res.json({ message: "Rutines Found", data: rutines })
  } catch (error) {
    console.log("rutinas no encontradas")
  }
}

// obtener una rutina

export const getOneRutine = async (req, res) => {
  try {
    const rutines = await RutinesModel.findAll({
      where: { id: req.params.id },
    })
    res.json({ message: "Rutine Found", data: rutines })
  } catch (error) {
    console.log("rutina no encontrada")
  }
}

// crear rutina

export const createRutine = async (req, res) => {
  try {
    await RutinesModel.create(req.body)
    res.json({ message: "Create Rutine" })
  } catch (error) {
    console.log("rutina no creada")
  }
}

// actualizar rutinas

export const updateRutine = async (req, res) => {
  try {
    await RutinesModel.update(req.body, {
      where: { id: req.params.id },
    })
    res.json({ message: "Rutine Update" })
  } catch (error) {
    console.log("rutina no actualizada")
  }
}

// eliminar rutina

export const deleteRutine = async (req, res) => {
  try {
    await RutinesModel.destroy({
      where: { id: req.params.id },
    })
    res.json({ message: "Rutine Eliminada" })
  } catch (error) {
    console.log("rutina no eliminada")
  }
}
