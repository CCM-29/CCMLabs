import ControllersCube from 'cano-cube-controllers';
import PassportCube from 'cano-cube-passport';
import ServicesCube from 'cano-cube-services';
import PoliciesCube from 'cano-cube-policies';
import RoutersCube from 'cano-cube-routers';
import ErrorCube from 'cano-cube-error';

module.exports = [
    ServicesCube,
    ErrorCube,
    ControllersCube,
    PoliciesCube,
    RoutersCube,
    PassportCube,
];
