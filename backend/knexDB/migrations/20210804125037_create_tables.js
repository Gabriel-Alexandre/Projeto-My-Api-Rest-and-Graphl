
exports.up = function(knex) {
    return knex.schema
    .createTable('Corporacao', table => {
        table.integer('id_corporacao').notNullable().primary('id_corporacao');
        table.string('nome_corporacao').notNullable();
        table.string('sede_corporacao').notNullable();
        table.integer('nfuncionarios_corporacao').notNullable();
        table.string('ativos_corporacao').notNullable();
    })
    .createTable('Departamentos', table => {
        table.integer('id_departamento').notNullable().primary();
        table.string('nome_departamento').notNullable();
        table.string('sigla_departamento').notNullable();
        table.integer('nfuncionarios_departamento').notNullable();
        table.integer('id_corporacao');
        table.foreign('id_corporacao').references('id_corporacao').inTable('Corporacao').onDelete('NO ACTION');
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTable('Corporacao')
    .dropTable('Departamentos');
};
