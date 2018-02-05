export type StateType = {
    alerts: AlertType[],
    enumMap: EnumMapType,
    errors: Set<string>,
    instanceData: Object,
    instanceNodeMap: NodeMapType,
    instanceRootId: number,
    messageServerMap: MessageServerMapType,
    mqttConnected: boolean,
    trainControl: TrainControlType,
    typeNodeMap: NodeMapType,
    typeRootId: number,
    ui: UiType,
    user: UserType
};

export type TrainControlType = {
    idleCalibration: number,
    light: number,
    lightCalibration: number,
    power: number
};
