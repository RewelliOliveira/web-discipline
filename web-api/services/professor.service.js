const ProfessorModel = require("../models/professores.model")
const professores = require("../data/professores").default

class ProfessorService {
    static listar() {
        return professores;
    }
}

module.exports = ProfessorService