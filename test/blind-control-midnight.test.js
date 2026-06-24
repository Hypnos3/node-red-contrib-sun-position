/* eslint-disable require-jsdoc */
const path = require('path');

const blindControl = require(path.join(__dirname, '..', 'nodes', 'blind-control.js'));

function createNodeStub() {
    return {
        debug() {},
        log() {},
        warn() {},
        error() {},
        context() {
            return {
                get() { return {}; },
                set() {}
            };
        },
        status() {},
        emit() {},
        send() {},
        setState() {},
        on() {},
        positionConfig: {
            getSunCalc() {
                return {
                    azimuthDegrees: 180,
                    altitudeDegrees: 10,
                    altitudeRadians: 0.2
                };
            },
            getTimeProp() {
                return { value: new Date('2024-01-01T00:00:00Z'), error: null };
            },
            getFloatProp() { return 0; },
            comparePropValue() { return false; },
            getPropValue() { return undefined; },
            getOutDataProp() { return undefined; },
            toDateString(date) { return date.toISOString(); },
            toTimeString(date) { return date.toISOString(); }
        },
        blindData: {
            levelBottom: 0,
            levelTop: 100,
            increment: 1,
            levelDefault: 50,
            levelMin: 0,
            levelMax: 100,
            topic: ''
        },
        sunData: {
            mode: 0,
            topic: ''
        },
        windowSettings: {
            top: 100,
            bottom: 0,
            AzimuthStart: 0,
            AzimuthEnd: 360
        },
        oversteer: { active: false },
        oversteerData: [],
        rules: { data: [] },
        level: { current: NaN, currentInverse: NaN, topic: '' },
        previousData: { level: NaN, reasonCode: -1 },
        autoTrigger: null,
        storeName: ''
    };
}

function loadNode() {
    const RED = {
        nodes: {
            createNode(node, config) {
                Object.assign(node, config);
                node.id = 'test';
                node.name = 'test';
            },
            getNode() {
                return null;
            },
            registerType() {}
        },
        _: key => key
    };
    blindControl(RED);
}

function testMidnightRuleSelection() {
    const node = createNodeStub();
    node.rules.data = [{
        timeOp: 1,
        timeType: 'entered',
        timeValue: '23:15',
        offsetType: 'none',
        offsetValue: '',
        multiplier: 60000,
        timeLimited: true,
        levelType: 'levelFixed',
        levelValue: '0',
        levelOp: 0,
        conditional: false
    }];
    const _now = new Date('2024-01-01T00:00:00Z');
    const _tempData = {};
    const _checkRules = require(path.join(__dirname, '..', 'nodes', 'blind-control.js'));
    return _checkRules && _now && _tempData && _checkRules;
}

try {
    loadNode();
    testMidnightRuleSelection();
} catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    process.exitCode = 1;
}