function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();

    dataset.addColumn('login')
    dataset.addColumn('nome')

    var groupFilter = DatasetFactory.createConstraint('colleagueGroupPK.groupId', 'SUPERVISOR_DE_OS', 'SUPERVISOR_DE_OS', ConstraintType.MUST)
    // Constraint são as condições de busca do Dataset
    // DatasetFactory.createConstraint(field, initialValue, finalValue, Type[MUST || SHOULD || MUST_NOT])
    // https://tdn.totvs.com/display/public/fluig/Acessando+Datasets

    var datasetGroup = DatasetFactory.getDataset('colleagueGroup', null, new Array(groupFilter), null)
    // Get Dataset faz um efetivamente o Acesso ao um dataset que está sendo buscado
    // DatasetFactory.getDataset(datasetName, new Array(field), new Array(constraints), new Array(order))

    for (i = 0; i < datasetGroup.rowsCount; i++){
        var userGroup = datasetGroup.getValue(i, 'colleagueGroupPK.colleagueId')
        // getValue recebe o index da linha e nome da coluna

        var datasetUser = DatasetFactory.getDataset('colleague', null, null, null)

        for(j = 0; j < datasetUser.rowsCount; j++){
            var userCol = datasetUser.getValue(j, 'colleaguePK.colleagueId')
            var userName = datasetUser.getValue(j, 'colleagueName')

            if (userCol == userGroup){
                dataset.addRow(new Array(userCol, userName))
            }
        }
    }

    return dataset
}
function onMobileSync(user) {

}