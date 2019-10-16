const leadGenService = {
    getAllLeads(knex, id) {
        return knex
            .from('lead_gen')
            .select('*')
            .where('user_id', id)
    }
}

module.exports = leadGenService;