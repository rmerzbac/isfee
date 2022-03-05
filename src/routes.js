import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
    Menu,
    MenuItem,
    SubMenu
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import './index.css';

import logo from "./JSOMLockup.png"

import PiccoloRRC from "./woodwinds/piccolo/rangeRegistersColors.js"
import PiccoloMAV from "./woodwinds/piccolo/moreArticulationVibratoColors.js"
import PiccoloPAC from "./woodwinds/piccolo/passagesArticulationColors.js"
import FluteRRT from "./woodwinds/flute/rangeRegistersTremolos.js"
import FluteAVC from "./woodwinds/flute/articulationVibratoColors.js"
import FluteP from "./woodwinds/flute/passages.js"
import FluteRC from "./woodwinds/flute/registerColors.js"
import AltoFluteRR from "./woodwinds/altoFlute/rangeRegisters.js"
import AltoFluteMACV from "./woodwinds/altoFlute/moreArticulationColorsVibrato.js"
import AltoFlutePAC from "./woodwinds/altoFlute/passagesArticulationColors.js"
import AltoFluteRC from "./woodwinds/altoFlute/registerColors.js"
import OboeAP from "./woodwinds/oboe/anotherPassage.js"
import OboeAVC from "./woodwinds/oboe/articulationVibratoColors.js"
import OboeP from "./woodwinds/oboe/passages.js"
import OboeRRT from "./woodwinds/oboe/rangeRegistersTremolos.js"
import OboeRC from "./woodwinds/oboe/registerColors.js"
import EnglishHornAVC from "./woodwinds/englishHorn/articulationVibratoColors.js"
import EnglishHornPAC from "./woodwinds/englishHorn/passageArticulationColors.js"
import EnglishHornRR from "./woodwinds/englishHorn/rangeRegisters.js"
import EnglishHornRC from "./woodwinds/englishHorn/registerColors.js"
import EFlatClarinetAP from "./woodwinds/eflatClarinet/anotherPassage.js"
import EFlatClarinetAC from "./woodwinds/eflatClarinet/articulationColors.js"
import EFlatClarinetP from "./woodwinds/eflatClarinet/passage.js"
import EFlatClarinetR from "./woodwinds/eflatClarinet/range.js"
import EFlatClarinetRC from "./woodwinds/eflatClarinet/registerColors.js"
import ClarinetAP from "./woodwinds/clarinet/anotherPassage.js"
import ClarinetAC from "./woodwinds/clarinet/articulationColors.js"
import ClarinetP from "./woodwinds/clarinet/passage.js"
import ClarinetRS from "./woodwinds/clarinet/rangeSkips.js"
import ClarinetRC from "./woodwinds/clarinet/registerColors.js"
import ClarinetTT from "./woodwinds/clarinet/trillsTremolos.js"
import ClarinetTV from "./woodwinds/clarinet/tonguingVibrato.js"
import BassClarinetAC from "./woodwinds/bassClarinet/articulationColors.js"
import BassClarinetP from "./woodwinds/bassClarinet/passages.js"
import BassClarinetR from "./woodwinds/bassClarinet/range.js"
import BassClarinetRC from "./woodwinds/bassClarinet/registerColors.js"
import ContraAltoClarinetAP from "./woodwinds/contraaltoClarinet/articulationsPassage.js"
import ContraAltoClarinetR from "./woodwinds/contraaltoClarinet/range.js"
import ContraAltoClarinetRC from "./woodwinds/contraaltoClarinet/registerColors.js"
import SopranoSaxAC from "./woodwinds/sopranoSaxophone/articulationColors.js"
import SopranoSaxMAVC from "./woodwinds/sopranoSaxophone/moreArticulationVibratoColors.js"
import SopranoSaxP from "./woodwinds/sopranoSaxophone/passage.js"
import SopranoSaxRR from "./woodwinds/sopranoSaxophone/rangeRegisters.js"
import SopranoSaxRC from "./woodwinds/sopranoSaxophone/registerColors.js"
import AltoSaxAC from "./woodwinds/altoSaxophone/articulationColors.js"
import AltoSaxMAVC from "./woodwinds/altoSaxophone/moreArticulationVibratoColors.js"
import AltoSaxP from "./woodwinds/altoSaxophone/passage.js"
import AltoSaxRR from "./woodwinds/altoSaxophone/rangeRegisters.js"
import AltoSaxRC from "./woodwinds/altoSaxophone/registerColors.js"
import AltoSaxTT from "./woodwinds/altoSaxophone/trillsTremolos.js"
import BaritoneSaxophoneAC from "./woodwinds/baritoneSaxophone/articulationColorsBrSx.js"
import BaritoneSaxophoneMAVC from "./woodwinds/baritoneSaxophone/moreArticulationVibratoColorsBrSx.js"
import BaritoneSaxophoneRR from "./woodwinds/baritoneSaxophone/rangeRegistersBrSx.js"
import BaritoneSaxophoneP from "./woodwinds/baritoneSaxophone/passageBrSx.js"
import BaritoneSaxophoneRC from "./woodwinds/baritoneSaxophone/registerColorsBrSx.js"
import TenorSaxophoneP from "./woodwinds/tenorSaxophone/passageTSx.js"
import TenorSaxophoneRR from "./woodwinds/tenorSaxophone/rangeRegistersTSx.js"
import TenorSaxophoneAC from "./woodwinds/tenorSaxophone/articulationColorsTSx.js"
import TenorSaxophoneMAVC from "./woodwinds/tenorSaxophone/moreArticulationVibratoColorsTSx.js"
import TenorSaxophoneRC from "./woodwinds/tenorSaxophone/registerColorsTSx.js"
import BassoonRRT from "./woodwinds/bassoon/rangeRegistersTremoloBsn.js"
import BassoonRC from "./woodwinds/bassoon/registerColorsBsn.js"
import BassoonP from "./woodwinds/bassoon/passagesBsn.js"
import BassoonAVC from "./woodwinds/bassoon/articulationsVibratoColorsBsn.js"
import ContrabassoonAC from "./woodwinds/contrabassoon/articulationColorsCBsn.js"
import ContrabassoonSRC from "./woodwinds/contrabassoon/scaleRegisterColorsCBsn.js"
import ContrabassoonP from "./woodwinds/contrabassoon/passageCBsn.js"

import HornHS from "./brass/horn/harmonicSeriesHn.js"
import HornAC from "./brass/horn/articulationColorsHn.js"
import HornP from "./brass/horn/passagesHn.js"
import HornSVT from "./brass/horn/scalesValuesTriggersHn.js"
import HornST from "./brass/horn/skipsTrillsHn.js"
import HornTVC from "./brass/horn/tonguingVibratoColorsHn.js"
import HornSM from "./brass/horn/stoppingMutingHn.js"
import HornNH from "./brass/horn/naturalHornHn.js"
import HornBH from "./brass/horn/baroqueHornHn.js"
import TrumpetHFS from "./brass/trumpet/harmonicsFingeringScaleTp.js"
import TrumpetAVC from "./brass/trumpet/articulationVibratoColorsTp.js"
import TrumpetP from "./brass/trumpet/passagesTp.js"
import TrumpetPBM from "./brass/trumpet/pitchBendsMutesTp.js"
import TrumpetTRC from "./brass/trumpet/tremolosRegisterColorsTp.js"
import TubaP from "./brass/tuba/passagesTuba.js"
import TubaAC from "./brass/tuba/articulationColorsTuba.js"
import TubaAVM from "./brass/tuba/articulationsVibratoMuteTuba.js"
import TubaHSST from "./brass/tuba/harmonicSeriesScalesTrillsTuba.js"
import TubaP2 from "./brass/tuba/passage2Tuba.js"
import TubaRC from "./brass/tuba/registerColorsTuba.js"
import BassTromboneST from "./brass/bassTrombone/scalesTriggersBTbn.js"
import BassTromboneRC from "./brass/bassTrombone/registerColorsBTbn.js"
import BassTromboneP from "./brass/bassTrombone/passagesBTbn.js"
import EuphoniumAC from "./brass/euphonium/articulationColorsEuph.js"
import EuphoniumVMP from "./brass/euphonium/vibratoMutePassageEuph.js"
import EuphoniumSTRC from "./brass/euphonium/skipsTrillsRegisterColorsEuph.js"
import EuphoniumHSVS from "./brass/euphonium/harmonicSeriesValvesScaleEuph.js"
import FlugelhornSP from "./brass/flugelhorn/scalePassageFgh.js"
import PiccoloTrumpetS from "./brass/piccoloTrumpet/scalePTp.js"
import PiccoloTrumpetP from "./brass/piccoloTrumpet/passagePTp.js"
import TenorTromboneMAV from "./brass/tenorTrombone/moreArticulationsVibratoTbn.js"
import TenorTrombonePHS from "./brass/tenorTrombone/positionsHarmonicsScaleTbn.js"
import TenorTromboneP from "./brass/tenorTrombone/passagesTbn.js"
import TenorTromboneRAC from "./brass/tenorTrombone/registerArticulationColorsTbn.js"
import TenorTromboneP2 from "./brass/tenorTrombone/passages2Tbn.js"
import TenorTromboneM from "./brass/tenorTrombone/mutesTbn.js"
import TenorTromboneTG from "./brass/tenorTrombone/triggersGlissandosTbn.js"

import DrumsBTTC from "./percussion/drums/bongosTimbalesTomsConga.js"
import DrumsDS from "./percussion/drums/drumsetSwing.js"
import DrumsDR from "./percussion/drums/drumsetRock.js"
import DrumsSBD from "./percussion/drums/snareBassDrum.js"
import DrumsDM from "./percussion/drums/drumMultiset.js"
import DrumsT from "./percussion/drums/tambourine.js"
import WoodsAndOthersWBCC from "./percussion/woodsAndOthers/woodBlocksClavesCastanets.js"
import WoodsAndOthersLDTB from "./percussion/woodsAndOthers/logDrumTempleBlocks.js"
import WoodsAndOthersWO from "./percussion/woodsAndOthers/whistlesOthers.js"
import KeyboardPercussionMCB from "./percussion/keyboardPercussion/marimbaChordsBass.js"
import KeyboardPercussionMMT from "./percussion/keyboardPercussion/marimbaMalletTechniques.js"
import KeyboardPercussionVRM from "./percussion/keyboardPercussion/vibraphoneRangeMallets.js"
import KeyboardPercussionVDB from "./percussion/keyboardPercussion/vibraphoneDampingBowing.js"
import KeyboardPercussionXRM from "./percussion/keyboardPercussion/xylophoneRangeMallets.js"
import KeyboardPercussionXHRM from "./percussion/keyboardPercussion/xylophoneHighRegisterMallets.js"
import KeyboardPercussionAC from "./percussion/keyboardPercussion/almglockenChimes.js"
import KeyboardPercussionGC from "./percussion/keyboardPercussion/glockenspielCrotales.js"
import KeyboardPercussionMRLR from "./percussion/keyboardPercussion/marimbaRangeLowRegister.js"
import KeyboardPercussionMRM from "./percussion/keyboardPercussion/marimbaRegistersMallets.js"
import TimpRM from "./percussion/timpani/drumRangesMalletsTmp.js"
import TimpDRC from "./percussion/timpani/dynamicRangeColorsTmp.js"
import Cymbals1 from "./percussion/metals/cymbals1.js"
import Cymbals2 from "./percussion/metals/cymbals2.js"
import TamtamsG from "./percussion/metals/tamtamGongs.js"
import TrianglesCwB from "./percussion/metals/trianglesCowbell.js"
import WindChimes from "./percussion/metals/windChimesTrees.js"

import CelestaRD from "./harpKeyboards/celesta/Celesta 001 rangeDynamics.js";
import CelestaAT from "./harpKeyboards/celesta/Celesta 002 articulationTextures.js";
import HarpPB from "./harpKeyboards/harp/Harp 001 pedalBasics.js";
import HarpEG from "./harpKeyboards/harp/Harp 002 enharmonicsGlissandos.js";
import HarpS from "./harpKeyboards/harp/Harp 003 scales.js";
import HarpCRA from "./harpKeyboards/harp/Harp 004 chordsRegistersArticulations.js";
import HarpAI from "./harpKeyboards/harp/Harp 005 arpeggiationIdioms.js";
import HarpHE from "./harpKeyboards/harp/Harp 006 harmonicsEffects.js";
import HarpBRC from "./harpKeyboards/harp/Harp 007 blockedRolledChords.js";
import PianoBC from "./harpKeyboards/pianoPartI/Piano 001 basicConstruction.js";
import PianoDP from "./harpKeyboards/pianoPartI/Piano 002 damperPedal.js";
import PianoPH from "./harpKeyboards/pianoPartI/Piano 003 pedallingHarmonics.js";
import PianoUCS from "./harpKeyboards/pianoPartI/Piano 004 unaCordaSostenuto.js";
import PianoSP from "./harpKeyboards/pianoPartI/Piano 005 sostenutoPedal.js";
import PianoPE from "./harpKeyboards/pianoPartI/Piano 006 pianoErgonomics.js";
import PianoHCS from "./harpKeyboards/pianoPartI/Piano 007 handCombinationSpan.js";
import PianoSAD from "./harpKeyboards/pianoPartI/Piano 008 scaleArticulationDynamics.js";
import PianoA from "./harpKeyboards/pianoPartIi/Piano 009 arpeggios.js"
import PianoJG from "./harpKeyboards/pianoPartIi/Piano 010 jumpsGlissando.js"
import PianoOP from "./harpKeyboards/pianoPartIi/Piano 011 orchestralPiano.js"
import PianoPB from "./harpKeyboards/pianoPartIi/Piano 012 passagesBach.js"
import PianoPB1 from "./harpKeyboards/pianoPartIi/Piano 013 passagesBeethoven1.js"
import PianoPB2 from "./harpKeyboards/pianoPartIi/Piano 014 passagesBeethoven2.js"
import PianoPD from "./harpKeyboards/pianoPartIi/Piano 015 passagesDebussy.js"

import GuitarTF from "./frettedStrings/guitar/Guitar 001 tuningFretboard.js"
import GuitarLHS from "./frettedStrings/guitar/Guitar 002 lHShapes.js"
import GuitarLHSSC from "./frettedStrings/guitar/Guitar 003 lHShapesStringColors.js"
import GuitarRHFSS from "./frettedStrings/guitar/Guitar 004 rHFingerStrokesSlurs.js"
import GuitarRHFP from "./frettedStrings/guitar/Guitar 005 rHFingerPatterns.js"
import GuitarMRHT from "./frettedStrings/guitar/Guitar 006 moreRHTechniques.js"
import GuitarH from "./frettedStrings/guitar/Guitar 007 harmonics.js"
import GuitarGT from "./frettedStrings/guitar/Guitar 008 glissandosTrills.js"
import GuitarCE from "./frettedStrings/guitar/Guitar 009 colorExtensions.js"

import CelloSF from "./strings/cello/celloSF.js"
import CelloNH from "./strings/cello/celloNH.js"
import CelloAH from "./strings/cello/artificialHarmonics.js"
import CelloMS from "./strings/cello/celloMS.js"
import CelloLHI from "./strings/cello/celloLHI.js"
import CelloRHI from "./strings/cello/celloRHI.js"
import CelloBDSP from "./strings/cello/bowDirectionsSpeedPressure.js"
import CelloMBC from "./strings/cello/moreBowColors.js"
import CelloP from "./strings/cello/pizzicato.js"
import ViolinSSC from "./strings/violin/scalesStringColors.js"
import ViolinADS from "./strings/violin/arpeggiosDoubleStops.js"
import ViolinHVG from "./strings/violin/harmonicsVibratoGlissando.js"
import ViolinABC from "./strings/violin/articulationAndBowColors.js"
import ViolinMBC from "./strings/violin/moreBowColors.js"
import ViolinP from "./strings/violin/pizzicatoV.js"
import ViolinPs from "./strings/violin/passages.js"
import ViolaSTSC from "./strings/viola/scalesTrillsStringColors.js"
import ViolaADS from "./strings/viola/arpeggiosDoubleStopsVa.js"
import ViolaHVG from "./strings/viola/harmonicsVibratoGlissandoVa.js"
import ViolaAC from "./strings/viola/articulationColorsVa.js"
import ViolaMBC from "./strings/viola/moreBowColorsVa.js"
import ViolaCLP from "./strings/viola/colLegnoPizzicatoVa.js"
import ViolaMPC from "./strings/viola/morePizzicatoColorsVa.js"
import ViolaPa from "./strings/viola/passageVa.js"
import BassLHF from "./strings/contrabass/leftHandFingeringB.js"
import BassRSC from "./strings/contrabass/registerStringColorsB.js"
import BassAC from "./strings/contrabass/articulationColorsB.js"
import BassMBC from "./strings/contrabass/moreBowColorsB.js"
import BassPz from "./strings/contrabass/pizzicatoB.js"
import BassEx from "./strings/contrabass/excerptB.js"
import StringLengthChart from "./strings/stringLengthChart/stringLengthChart.js"

export default function CreateMenu() {
  return (
    <Router forceRefresh={true}>
      <div id="menu">
        <AppBar style={{ background: '#990000', flexDirection: 'row'}}>
          <Toolbar>
            <Menu menuButton={<IconButton color="inherit"><MenuIcon /></IconButton>}>
                <SubMenu label="Woodwinds">
                  <SubMenu label="Piccolo">
                      <MenuItem href="/piccoloRRC">Range, Registers, & Colors</MenuItem>
                      <MenuItem href="/piccoloMAV">More Articulation & Vibrato</MenuItem>
                      <MenuItem href="/piccoloPAC">Passages & Articulation Colors</MenuItem>
                  </SubMenu>
                  <SubMenu label="Flute">
                      <MenuItem href="/fluteRRT">Range, Registers, & Tremolos</MenuItem>
                      <MenuItem href="/fluteRC">Register Colors</MenuItem>
                      <MenuItem href="/fluteP">Passages</MenuItem>
                      <MenuItem href="/fluteAVC">Articulation & Vibrato Colors</MenuItem>
                  </SubMenu>
                  <SubMenu label="Alto Flute">
                      <MenuItem href="/altoFluteRR">Range & Registers</MenuItem>
                      <MenuItem href="/altoFluteRC">Register Colors</MenuItem>
                      <MenuItem href="/altoFlutePAC">Passages & Articulation Colors</MenuItem>
                      <MenuItem href="/altoFluteMACV">More Articulation Colors & Vibrato</MenuItem>
                  </SubMenu>
                  <SubMenu label="Oboe">
                      <MenuItem href="/oboeRRT">Range, Registers, & Tremolos</MenuItem>
                      <MenuItem href="/oboeRC">Register Colors</MenuItem>
                      <MenuItem href="/oboeP">Passages</MenuItem>
                      <MenuItem href="/oboeAP">Another Passage</MenuItem>
                      <MenuItem href="/oboeAVC">Articulation & Vibrato Colors</MenuItem>
                  </SubMenu>
                  <SubMenu label="English Horn">
                      <MenuItem href="/englishHornRR">Range & Registers</MenuItem>
                      <MenuItem href="/englishHornRC">Register Colors</MenuItem>
                      <MenuItem href="/englishHornPAC">Passages & Articultion Colors</MenuItem>
                      <MenuItem href="/englishHornAVC">Articulation & Vibrato Colors</MenuItem>
                  </SubMenu>
                  <SubMenu label="E-flat Clarinet">
                      <MenuItem href="/eflatClarinetR">Range</MenuItem>
                      <MenuItem href="/eflatClarinetRC">Register Colors</MenuItem>
                      <MenuItem href="/eflatClarinetAC">Articulation Colors</MenuItem>
                      <MenuItem href="/eflatClarinetP">Passage</MenuItem>
                      <MenuItem href="/eflatClarinetAP">Another Passage</MenuItem>
                  </SubMenu>
                  <SubMenu label="Clarinet">
                      <MenuItem href="/clarinetRS">Range & Skips</MenuItem>
                      <MenuItem href="/clarinetTT">Trills & Tremolos</MenuItem>
                      <MenuItem href="/clarinetRC">Register Colors</MenuItem>
                      <MenuItem href="/clarinetAC">Articulation Colors</MenuItem>
                      <MenuItem href="/clarinetTV">Tonguing & Vibrato</MenuItem>
                      <MenuItem href="/clarinetP">Passage</MenuItem>
                      <MenuItem href="/clarinetAP">Another Passage</MenuItem>
                  </SubMenu>
                  <SubMenu label="Bass Clarinet">
                      <MenuItem href="/bassClarinetR">Range</MenuItem>
                      <MenuItem href="/bassClarinetRC">Register Colors</MenuItem>
                      <MenuItem href="/bassClarinetAC">Articulation Colors</MenuItem>
                      <MenuItem href="/bassClarinetP">Passages</MenuItem>
                  </SubMenu>
                  <SubMenu label="Contra-alto Clarinet">
                      <MenuItem href="/contraaltoClarinetR">Range</MenuItem>
                      <MenuItem href="/contraaltoClarinetRC">Register Colors</MenuItem>
                      <MenuItem href="/contraaltoClarinetAP">Articulations & Passage</MenuItem>
                  </SubMenu>
                  <SubMenu label="Soprano Saxophone">
                      <MenuItem href="/sopranoSaxRR">Range & Registers</MenuItem>
                      <MenuItem href="/sopranoSaxRC">Register Colors</MenuItem>
                      <MenuItem href="/sopranoSaxP">Passage</MenuItem>
                      <MenuItem href="/sopranoSaxAC">Articulation Colors</MenuItem>
                      <MenuItem href="/sopranoSaxMAVC">More Articulation & Vibrato Colors</MenuItem>
                  </SubMenu>
                  <SubMenu label="Alto Saxophone">
                      <MenuItem href="/altoSaxRR">Range & Registers</MenuItem>
                      <MenuItem href="/altoSaxRC">Register Colors</MenuItem>
                      <MenuItem href="/altoSaxTT">Trills & Tremolos</MenuItem>
                      <MenuItem href="/altoSaxP">Passage</MenuItem>
                      <MenuItem href="/altoSaxAC">Articulation Colors</MenuItem>
                      <MenuItem href="/altoSaxMAVC">More Articulation & Vibrato Colors</MenuItem>
                  </SubMenu>
                  <SubMenu label="Tenor Saxophone">
                    <MenuItem href="/TenorSaxophoneRR">Range & Registers</MenuItem>
                    <MenuItem href="/TenorSaxophoneRC">Register Colors</MenuItem>
                    <MenuItem href="/TenorSaxophoneAC">Articulation Colors</MenuItem>
                    <MenuItem href="/TenorSaxophoneMAVC">More Articulation & Vibrato Colors</MenuItem>
                    <MenuItem href="/TenorSaxophoneP">Excerpts</MenuItem>
                  </SubMenu>
                  <SubMenu label="Baritone Saxophone">
                    <MenuItem href="/BaritoneSaxophoneRR">Range & Registers</MenuItem>
                    <MenuItem href="/BaritoneSaxophoneRC">Register Colors</MenuItem>
                    <MenuItem href="/BaritoneSaxophoneAC">Articulation Colors</MenuItem>
                    <MenuItem href="/BaritoneSaxophoneMAVC">More Articulations & Vibrato Colors</MenuItem>
                    <MenuItem href="/BaritoneSaxophoneP">Excerpts</MenuItem>
                  </SubMenu>
                  <SubMenu label="Bassoon">
                    <MenuItem href="/BassoonRRT">Range, Registers, & Tremolo</MenuItem>
                    <MenuItem href="/BassoonRC">Register Colors</MenuItem>
                    <MenuItem href="/BassoonAVC">Articulations & Vibrato Colors</MenuItem>
                    <MenuItem href="/BassoonP">Excerpts</MenuItem>
                  </SubMenu>
                  <SubMenu label="Contrabassoon">
                    <MenuItem href="/ContrabassoonSRC">Scales & Register Colors</MenuItem>
                    <MenuItem href="/ContrabassoonAC">Articulation Colors</MenuItem>
                    <MenuItem href="/ContrabassoonP">Excerpts</MenuItem>
                  </SubMenu>
                </SubMenu>

                <SubMenu label="Brass">
                  <SubMenu label="Trumpet">
                    <MenuItem href="/TrumpetHFS">Harmonic Series, Fingering & Scales</MenuItem>
                    <MenuItem href="/TrumpetTRC">Tremolos & Register Colors</MenuItem>
                    <MenuItem href="/TrumpetAVC">Articulation & Vibrato Colors</MenuItem>
                    <MenuItem href="/TrumpetPBM">Pitch Bend & Mutes</MenuItem>
                    <MenuItem href="/TrumpetP">Passages</MenuItem>
                  </SubMenu>
                  <SubMenu label="Flugelhorn">
                    <MenuItem href="/FlugelhornSP">Scales & Passages</MenuItem>
                  </SubMenu>
                  <SubMenu label="Piccolo Trumpet">
                    <MenuItem href="/PiccoloTrumpetS">Scales</MenuItem>
                    <MenuItem href="/PiccoloTrumpetP">Passages</MenuItem>
                  </SubMenu>
                  <SubMenu label="Horn">
                    <MenuItem href="/HornHS">Harmonic Series</MenuItem>
                    <MenuItem href="/HornAC">Articulation Colors</MenuItem>
                    <MenuItem href="/HornSVT">Scales, Valves, & Triggers</MenuItem>
                    <MenuItem href="/HornST">Skips & Trills </MenuItem>
                    <MenuItem href="/HornTVC">Tonguing, & Vibrato Colors</MenuItem>
                    <MenuItem href="/HornSM">Stopping & Muting</MenuItem>
                    <MenuItem href="/HornP">Passages</MenuItem>
                    <MenuItem href="/HornNH">Natural Horn</MenuItem>
                    <MenuItem href="/HornBH">Baroque Horn</MenuItem>
                  </SubMenu>
                  <SubMenu label="Tenor Trombone">
                    <MenuItem href="/TenorTrombonePHS">Positions & Harmonic Scale</MenuItem>
                    <MenuItem href="/TenorTromboneRAC">Registers, Articulations & Colors</MenuItem>
                    <MenuItem href="/TenorTromboneMAV">More Articulations & Vibrato</MenuItem>
                    <MenuItem href="/TenorTromboneM">Mutes</MenuItem>
                    <MenuItem href="/TenorTromboneTG">Triggers & Glissandi</MenuItem>
                    <MenuItem href="/TenorTromboneP">Passages I</MenuItem>
                    <MenuItem href="/TenorTromboneP2">Passages II</MenuItem>
                  </SubMenu>
                  <SubMenu label="Bass Trombone">
                    <MenuItem href="/BassTromboneST">Scale & Triggers</MenuItem>
                    <MenuItem href="/BassTromboneRC">Register Colors</MenuItem>
                    <MenuItem href="/BassTromboneP">Passages</MenuItem>
                  </SubMenu>
                  <SubMenu label="Euphonium">
                    <MenuItem href="/EuphoniumHSVS">Harmonic Series, Valves, & Scales</MenuItem>
                    <MenuItem href="/EuphoniumSTRC">Skips, Trills, & Register Colors</MenuItem>
                    <MenuItem href="/EuphoniumAC">Articulations & Colors</MenuItem>
                    <MenuItem href="/EuphoniumVMP">Vibrato, Mutes, & Passages</MenuItem>
                  </SubMenu>
                  <SubMenu label="Tuba">
                    <MenuItem href="/TubaHSST">Harmonic Series, Scales & Trills</MenuItem>
                    <MenuItem href="/TubaRC">Register Colors</MenuItem>
                    <MenuItem href="/TubaAC">Articulation Colors</MenuItem>
                    <MenuItem href="/TubaAVM">Articulations, Vibrato & Mutes</MenuItem>
                    <MenuItem href="/TubaP">Passages I</MenuItem>
                    <MenuItem href="/TubaP2">Passages II</MenuItem>
                  </SubMenu>
                </SubMenu>

                <SubMenu label="Percussion">
                  <SubMenu label="Timpani">
                    <MenuItem href="/drumRangesMalletsTmp">Drum Ranges & Mallets</MenuItem>
                    <MenuItem href="/dynamicRangeColorsTmp">Dynamic Range & Colors</MenuItem>
                  </SubMenu>
                  <SubMenu label="Metals">
                    <MenuItem href="/cymbals1">Cymbals 1</MenuItem>
                    <MenuItem href="/cymbals2">Cymbals 2</MenuItem>
                    <MenuItem href="/tamtamGongs">Tamtams, Gongs</MenuItem>
                    <MenuItem href="/trianglesCowbell">Triangles, Cowbells</MenuItem>
                    <MenuItem href="/windChimesTrees">Wind Chimes, Trees</MenuItem>
                  </SubMenu>
                  <SubMenu label="Drums">
                    <MenuItem href="/DrumsSBD">Snare & Bass Drums</MenuItem>
                    <MenuItem href="/DrumsDM">Drum Multi-set</MenuItem>
                    <MenuItem href="/DrumsBTTC">Bongos, Timbales, Toms & Congas</MenuItem>
                    <MenuItem href="/DrumsDS">Swing Drum Set</MenuItem>
                    <MenuItem href="/DrumsDR">Rock Drum Set</MenuItem>
                    <MenuItem href="/DrumsT">Tambourine</MenuItem>
                  </SubMenu>
                  <SubMenu label="Woods & Others">
                    <MenuItem href="/WoodsAndOthersWBCC">Wood Blocks, Claves, & Castanets</MenuItem>
                    <MenuItem href="/WoodsAndOthersLDTB">Log Drums & Temple Blocks</MenuItem>
                    <MenuItem href="/WoodsAndOthersWO">Whistles & Others</MenuItem>
                  </SubMenu>
                  <SubMenu label="Keyboard Percussion">
                    <MenuItem href="/KeyboardPercussionMCB">Marimba: Chords & Bass</MenuItem>
                    <MenuItem href="/KeyboardPercussionMMT">Marimba: Mallet Techniques</MenuItem>
                    <MenuItem href="/KeyboardPercussionMRLR">Marimba: Range & Low Register</MenuItem>
                    <MenuItem href="/KeyboardPercussionMRM">Marimba: Register & Mallets</MenuItem>
                    <MenuItem href="/KeyboardPercussionVRM">Vibraphone: Range Mallets</MenuItem>
                    <MenuItem href="/KeyboardPercussionVDB">Vibraphone: Damping & Bowing</MenuItem>
                    <MenuItem href="/KeyboardPercussionXRM">Xylophone: Range & Mallets</MenuItem>
                    <MenuItem href="/KeyboardPercussionXHRM">Xylophone: High Register & Mallets</MenuItem>
                    <MenuItem href="/KeyboardPercussionAC">Almglocken & Chimes</MenuItem>
                    <MenuItem href="/KeyboardPercussionGC">Glockenspiel & Crotales</MenuItem>
                  </SubMenu>
                </SubMenu>

                <SubMenu label="Harp and Keyboards">
                  <SubMenu label="Celesta">
                      <MenuItem href="/CelestaRD">Range & Dynamics</MenuItem>
                      <MenuItem href="/CelestaAT">Articulation Textures</MenuItem>
                  </SubMenu>
                  <SubMenu label="Harp">
                      <MenuItem href="/HarpPB">Pedal Basics</MenuItem>
                      <MenuItem href="/HarpEG">Enharmonic & Glissandos</MenuItem>
                      <MenuItem href="/HarpS">Scales</MenuItem>
                      <MenuItem href="/HarpCRA">Chords, Registers, Articulations</MenuItem>
                      <MenuItem href="/HarpAI">Arpeggiation Idioms</MenuItem>
                      <MenuItem href="/HarpHE">Harmonics & Effects</MenuItem>
                      <MenuItem href="/HarpBRC">Blocked & Rolled Chords</MenuItem>
                  </SubMenu>
                  <SubMenu label="Piano, Part I">
                      <MenuItem href="/PianoBC">Basic Construction</MenuItem>
                      <MenuItem href="/PianoDP">Damper Pedal</MenuItem>
                      <MenuItem href="/PianoPH">Pedalling, Harmonics</MenuItem>
                      <MenuItem href="/PianoUCS">Una Corda, Sostenuto</MenuItem>
                      <MenuItem href="/PianoSP">Sostenuto Pedal</MenuItem>
                      <MenuItem href="/PianoPE">Piano Ergonomics</MenuItem>
                      <MenuItem href="/PianoHCS">Hand Combination, Span</MenuItem>
                      <MenuItem href="/PianoSAD">Scale Articulation, Dynamics</MenuItem>
                  </SubMenu>
                  <SubMenu label="Piano, Part II">
                      <MenuItem href="/PianoA">Arpeggios</MenuItem>
                      <MenuItem href="/PianoJG">Jumps, Glissandos</MenuItem>
                      <MenuItem href="/PianoOP">Orchestral Piano</MenuItem>
                      <MenuItem href="/PianoPB">Passages - Bach</MenuItem>
                      <MenuItem href="/PianoPB1">Passages - Beethoven, I</MenuItem>
                      <MenuItem href="/PianoPB2">Passages - Beethoven, II</MenuItem>
                      <MenuItem href="/PianoPD">Passages - Debussy</MenuItem>
                  </SubMenu>
                </SubMenu>

                <SubMenu label="Guitar">
                  <MenuItem href="/GuitarTF">Tuning, Fretboard</MenuItem>
                  <MenuItem href="/GuitarLHS">L. H. Shapes</MenuItem>
                  <MenuItem href="/GuitarLHSSC">L. H. Shapes, String Colors</MenuItem>
                  <MenuItem href="/GuitarRHFSS">R. H. Finger-Strokes, Slurs</MenuItem>
                  <MenuItem href="/GuitarRHFP">R. H. Finger Patterns</MenuItem>
                  <MenuItem href="/GuitarMRHT">More R. H. Techniques</MenuItem>
                  <MenuItem href="/GuitarH">Harmonics</MenuItem>
                  <MenuItem href="/GuitarGT">Glissandos, Trills</MenuItem>
                  <MenuItem href="/GuitarCE">Color Extensions</MenuItem>
                </SubMenu>

                <SubMenu label="Strings">
                  <SubMenu label="Violin">
                      <MenuItem href="/scalesStringColors">Scales, String Colors</MenuItem>
                      <MenuItem href="/arpeggiosDoubleStops">Arpeggios & Double Stops</MenuItem>
                      <MenuItem href="/harmonicsVibratoGlissando">Harmonics, Vibrato & Glissando</MenuItem>
                      <MenuItem href="/articulationAndBowColors">Articulation & Bow Colors</MenuItem>
                      <MenuItem href="/moreVBowColors">More Bow Colors</MenuItem>
                      <MenuItem href="/pizzicatoV">Pizzicato</MenuItem>
                      <MenuItem href="/passagesV">Passages</MenuItem>
                  </SubMenu>
                  <SubMenu label="Viola">
                      <MenuItem href="/scalesTrillsStringColors">Scales, Trills & String Colors</MenuItem>
                      <MenuItem href="/arpeggiosDoubleStopsVa">Arpeggios & Double Stops</MenuItem>
                      <MenuItem href="/harmonicsVibratoGlissandoVa">Harmonics, Vibrato & Glissando</MenuItem>
                      <MenuItem href="/articulationColorsVa">Articulation & Bow Colors</MenuItem>
                      <MenuItem href="/moreBowColorsVa">More Bow Colors</MenuItem>
                      <MenuItem href="/colLegnoPizzicatoVa">Col Legno & Pizzicato</MenuItem>
                      <MenuItem href="/morePizzicatoColorsVa">More Pizzicato Colors</MenuItem>
                      <MenuItem href="/passageVa">Excerpt</MenuItem>
                  </SubMenu>
                  <SubMenu label="Cello">
                      <MenuItem href="/celloSF">Scale Fingering</MenuItem>
                      <MenuItem href="/celloNH">Natural Harmonics</MenuItem>
                      <MenuItem href="/celloAH">Artificial Harmonics</MenuItem>
                      <MenuItem href="/celloMS">Multiple Stops</MenuItem>
                      <MenuItem href="/celloLHI">Left Hand Inflections</MenuItem>
                      <MenuItem href="/celloRHI">Right Hand Inflections</MenuItem>
                      <MenuItem href="/bowDirectionsSpeedPressure">Bow Directions, Speed and Pressure</MenuItem>
                      <MenuItem href="/moreBowColors">More Bow Colors</MenuItem>
                      <MenuItem href="/pizzicato">Pizzicato</MenuItem>
                  </SubMenu>
                  <SubMenu label="Contrabass">
                      <MenuItem href="/leftHandFingeringB">Left Hand Fingering</MenuItem>
                      <MenuItem href="/registerStringColorsB">Register & String Colors</MenuItem>
                      <MenuItem href="/articulationColorsB">Articulation & Bow Colors</MenuItem>
                      <MenuItem href="/moreBowColorsB">More Bow Colors</MenuItem>
                      <MenuItem href="/pizzicatoB">Pizzicato</MenuItem>
                      <MenuItem href="/excerptB">Excerpt</MenuItem>
                  </SubMenu>
                  <MenuItem href="/stringLengthChart">String Length Chart</MenuItem>
                </SubMenu>
              </Menu>
              <Link to="/">
                 <p className="header">Instrument Studies for Eyes and Ears</p>
              </Link>
            </Toolbar>
            <a href="https://music.indiana.edu" style={{marginLeft: 'auto'}}>
              <img src={logo} alt="" style={{width: 500, height: "100%"}} href="https://music.indiana.edu"/>
            </a>
          </AppBar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/piccoloRRC">
              <PiccoloRRC />
            </Route>
            <Route path="/piccoloMAV">
              <PiccoloMAV />
            </Route>
            <Route path="/piccoloPAC">
              <PiccoloPAC />
            </Route>
            <Route path="/fluteRRT">
              <FluteRRT />
            </Route>
            <Route path="/fluteAVC">
              <FluteAVC />
            </Route>
            <Route path="/fluteRC">
              <FluteRC />
            </Route>
            <Route path="/fluteP">
              <FluteP />
            </Route>
            <Route path="/altoFluteRR">
              <AltoFluteRR />
            </Route>
            <Route path="/altoFluteRC">
              <AltoFluteRC />
            </Route>
            <Route path="/altoFlutePAC">
              <AltoFlutePAC />
            </Route>
            <Route path="/altoFluteMACV">
              <AltoFluteMACV />
            </Route>
            <Route path="/oboeAP">
              <OboeAP />
            </Route>
            <Route path="/oboeAVC">
              <OboeAVC />
            </Route>
            <Route path="/oboeP">
              <OboeP />
            </Route>
            <Route path="/oboeRRT">
              <OboeRRT />
            </Route>
            <Route path="/oboeRC">
              <OboeRC />
            </Route>
            <Route path="/englishHornRR">
              <EnglishHornRR />
            </Route>
            <Route path="/englishHornAVC">
              <EnglishHornAVC />
            </Route>
            <Route path="/englishHornPAC">
              <EnglishHornPAC />
            </Route>
            <Route path="/englishHornRC">
              <EnglishHornRC />
            </Route>
            <Route path="/eflatClarinetAP">
              <EFlatClarinetAP />
            </Route>
            <Route path="/eflatClarinetAC">
              <EFlatClarinetAC />
            </Route>
            <Route path="/eflatClarinetP">
              <EFlatClarinetP />
            </Route>
            <Route path="/eflatClarinetR">
              <EFlatClarinetR />
            </Route>
            <Route path="/eflatClarinetRC">
              <EFlatClarinetRC />
            </Route>
            <Route path="/clarinetAP">
              <ClarinetAP />
            </Route>
            <Route path="/clarinetAC">
              <ClarinetAC />
            </Route>
            <Route path="/ClarinetP">
              <ClarinetP />
            </Route>
            <Route path="/ClarinetRS">
              <ClarinetRS />
            </Route>
            <Route path="/ClarinetRC">
              <ClarinetRC />
            </Route>
            <Route path="/ClarinetTT">
              <ClarinetTT />
            </Route>
            <Route path="/ClarinetTV">
              <ClarinetTV />
            </Route>
            <Route path="/bassClarinetAC">
              <BassClarinetAC />
            </Route>
            <Route path="/bassClarinetP">
              <BassClarinetP />
            </Route>
            <Route path="/bassClarinetRC">
              <BassClarinetRC />
            </Route>
            <Route path="/bassClarinetR">
              <BassClarinetR />
            </Route>
            <Route path="/contraaltoClarinetAP">
              <ContraAltoClarinetAP />
            </Route>
            <Route path="/contraaltoClarinetR">
              <ContraAltoClarinetR />
            </Route>
            <Route path="/contraaltoClarinetRC">
              <ContraAltoClarinetRC />
            </Route>
            <Route path="/sopranoSaxAC">
              <SopranoSaxAC />
            </Route>
            <Route path="/sopranoSaxMAVC">
              <SopranoSaxMAVC />
            </Route>
            <Route path="/sopranoSaxP">
              <SopranoSaxP />
            </Route>
            <Route path="/sopranoSaxRR">
              <SopranoSaxRR />
            </Route>
            <Route path="/sopranoSaxRC">
              <SopranoSaxRC />
            </Route>
            <Route path="/altoSaxAC">
              <AltoSaxAC />
            </Route>
            <Route path="/altoSaxMAVC">
              <AltoSaxMAVC />
            </Route>
            <Route path="/altoSaxP">
              <AltoSaxP />
            </Route>
            <Route path="/altoSaxRR">
              <AltoSaxRR />
            </Route>
            <Route path="/altoSaxRC">
              <AltoSaxRC />
            </Route>
            <Route path="/altoSaxTT">
              <AltoSaxTT />
            </Route>
            <Route path="/BaritoneSaxophoneAC">
              <BaritoneSaxophoneAC />
            </Route>
            <Route path="/BaritoneSaxophoneMAVC">
              <BaritoneSaxophoneMAVC />
            </Route>
            <Route path="/BaritoneSaxophoneRR">
              <BaritoneSaxophoneRR />
            </Route>
            <Route path="/BaritoneSaxophoneP">
              <BaritoneSaxophoneP />
            </Route>
            <Route path="/BaritoneSaxophoneRC">
              <BaritoneSaxophoneRC />
            </Route>
            <Route path="/BassoonRRT">
              <BassoonRRT />
            </Route>
            <Route path="/BassoonRC">
              <BassoonRC />
            </Route>
            <Route path="/BassoonP">
              <BassoonP />
            </Route>
            <Route path="/BassoonAVC">
              <BassoonAVC />
            </Route>
            <Route path="/ContrabassoonAC">
              <ContrabassoonAC />
            </Route>
            <Route path="/ContrabassoonSRC">
              <ContrabassoonSRC />
            </Route>
            <Route path="/TenorSaxophoneP">
              <TenorSaxophoneP />
            </Route>
            <Route path="/TenorSaxophoneRR">
              <TenorSaxophoneRR />
            </Route>
            <Route path="/TenorSaxophoneAC">
              <TenorSaxophoneAC />
            </Route>
            <Route path="/TenorSaxophoneMAVC">
              <TenorSaxophoneMAVC />
            </Route>
            <Route path="/TenorSaxophoneRC">
              <TenorSaxophoneRC />
            </Route>
            <Route path="/ContrabassoonAC">
              <ContrabassoonAC />
            </Route>
            <Route path="/ContrabassoonSRC">
              <ContrabassoonSRC />
            </Route>
            <Route path="/ContrabassoonP">
              <ContrabassoonP />
            </Route>

            <Route path="/HornHS">
              <HornHS />
            </Route>
            <Route path="/HornAC">
              <HornAC />
            </Route>
            <Route path="/HornP">
              <HornP />
            </Route>
            <Route path="/HornSVT">
              <HornSVT />
            </Route>
            <Route path="/HornST">
              <HornST />
            </Route>
            <Route path="/HornTVC">
              <HornTVC />
            </Route>
            <Route path="/HornSM">
              <HornSM />
            </Route>
            <Route path="/HornNH">
              <HornNH />
            </Route>
            <Route path="/HornBH">
              <HornBH />
            </Route>
            <Route path="/TrumpetHFS">
              <TrumpetHFS />
            </Route>
            <Route path="/TrumpetAVC">
              <TrumpetAVC />
            </Route>
            <Route path="/TrumpetP">
              <TrumpetP />
            </Route>
            <Route path="/TrumpetPBM">
              <TrumpetPBM />
            </Route>
            <Route path="/TrumpetTRC">
              <TrumpetTRC />
            </Route>
            <Route path="/TubaP">
              <TubaP />
            </Route>
            <Route path="/TubaAC">
              <TubaAC />
            </Route>
            <Route path="/TubaAVM">
              <TubaAVM />
            </Route>
            <Route path="/TubaHSST">
              <TubaHSST />
            </Route>
            <Route path="/TubaP2">
              <TubaP2 />
            </Route>
            <Route path="/TubaRC">
              <TubaRC />
            </Route>
            <Route path="/BassTromboneST">
              <BassTromboneST />
            </Route>
            <Route path="/BassTromboneRC">
              <BassTromboneRC />
            </Route>
            <Route path="/BassTromboneP">
              <BassTromboneP />
            </Route>
            <Route path="/EuphoniumAC">
              <EuphoniumAC />
            </Route>
            <Route path="/EuphoniumVMP">
              <EuphoniumVMP />
            </Route>
            <Route path="/EuphoniumSTRC">
              <EuphoniumSTRC />
            </Route>
            <Route path="/EuphoniumHSVS">
              <EuphoniumHSVS />
            </Route>
            <Route path="/FlugelhornSP">
              <FlugelhornSP />
            </Route>
            <Route path="/PiccoloTrumpetS">
              <PiccoloTrumpetS />
            </Route>
            <Route path="/PiccoloTrumpetP">
              <PiccoloTrumpetP />
            </Route>
            <Route path="/TenorTromboneMAV">
              <TenorTromboneMAV />
            </Route>
            <Route path="/TenorTrombonePHS">
              <TenorTrombonePHS />
            </Route>
            <Route path="/TenorTromboneP">
              <TenorTromboneP />
            </Route>
            <Route path="/TenorTromboneRAC">
              <TenorTromboneRAC />
            </Route>
            <Route path="/TenorTromboneP2">
              <TenorTromboneP2 />
            </Route>
            <Route path="/TenorTromboneM">
              <TenorTromboneM />
            </Route>
            <Route path="/TenorTromboneTG">
              <TenorTromboneTG />
            </Route>

            <Route path="/drumRangesMalletsTmp">
              <TimpRM />
            </Route>
            <Route path="/dynamicRangeColorsTmp">
              <TimpDRC />
            </Route>
            <Route path="/cymbals1">
              <Cymbals1 />
            </Route>
            <Route path="/cymbals2">
              <Cymbals2 />
            </Route>
            <Route path="/trianglesCowbell">
              <TrianglesCwB />
            </Route>
            <Route path="/windChimesTrees">
              <WindChimes />
            </Route>
            <Route path="/tamtamGongs">
              <TamtamsG />
            </Route>
            <Route path="/DrumsBTTC">
              <DrumsBTTC />
            </Route>
            <Route path="/DrumsDS">
              <DrumsDS />
            </Route>
            <Route path="/DrumsDR">
              <DrumsDR />
            </Route>
            <Route path="/DrumsSBD">
              <DrumsSBD />
            </Route>
            <Route path="/DrumsDM">
              <DrumsDM />
            </Route>
            <Route path="/DrumsT">
              <DrumsT />
            </Route>
            <Route path="/WoodsAndOthersWBCC">
              <WoodsAndOthersWBCC />
            </Route>
            <Route path="/WoodsAndOthersLDTB">
              <WoodsAndOthersLDTB />
            </Route>
            <Route path="/WoodsAndOthersWO">
              <WoodsAndOthersWO />
            </Route>
            <Route path="/KeyboardPercussionMCB">
              <KeyboardPercussionMCB />
            </Route>
            <Route path="/KeyboardPercussionMMT">
              <KeyboardPercussionMMT />
            </Route>
            <Route path="/KeyboardPercussionVRM">
              <KeyboardPercussionVRM />
            </Route>
            <Route path="/KeyboardPercussionVDB">
              <KeyboardPercussionVDB />
            </Route>
            <Route path="/KeyboardPercussionXRM">
              <KeyboardPercussionXRM />
            </Route>
            <Route path="/KeyboardPercussionXHRM">
              <KeyboardPercussionXHRM />
            </Route>
            <Route path="/KeyboardPercussionAC">
              <KeyboardPercussionAC />
            </Route>
            <Route path="/KeyboardPercussionGC">
              <KeyboardPercussionGC />
            </Route>
            <Route path="/KeyboardPercussionMRLR">
              <KeyboardPercussionMRLR />
            </Route>
            <Route path="/KeyboardPercussionMRM">
              <KeyboardPercussionMRM />
            </Route>

            <Route path="/CelestaRD">
              <CelestaRD />
            </Route>
            <Route path="/CelestaAT">
              <CelestaAT />
            </Route>
            <Route path="/HarpPB">
              <HarpPB />
            </Route>
            <Route path="/HarpEG">
              <HarpEG />
            </Route>
            <Route path="/HarpS">
              <HarpS />
            </Route>
            <Route path="/HarpCRA">
              <HarpCRA />
            </Route>
            <Route path="/HarpAI">
              <HarpAI />
            </Route>
            <Route path="/HarpHE">
              <HarpHE />
            </Route>
            <Route path="/HarpBRC">
              <HarpBRC />
            </Route>
            <Route path="/PianoBC">
              <PianoBC />
            </Route>
            <Route path="/PianoDP">
              <PianoDP />
            </Route>
            <Route path="/PianoPH">
              <PianoPH />
            </Route>
            <Route path="/PianoUCS">
              <PianoUCS />
            </Route>
            <Route path="/PianoSP">
              <PianoSP />
            </Route>
            <Route path="/PianoPE">
              <PianoPE />
            </Route>
            <Route path="/PianoHCS">
              <PianoHCS />
            </Route>
            <Route path="/PianoSAD">
              <PianoSAD />
            </Route>
            <Route path="/PianoA">
              <PianoA />
            </Route>
            <Route path="/PianoJG">
              <PianoJG />
            </Route>
            <Route path="/PianoOP">
              <PianoOP />
            </Route>
            <Route path="/PianoPB">
              <PianoPB />
            </Route>
            <Route path="/PianoPB1">
              <PianoPB1 />
            </Route>
            <Route path="/PianoPB2">
              <PianoPB2 />
            </Route>
            <Route path="/PianoPD">
              <PianoPD/>
            </Route>

            <Route path="/GuitarTF">
              <GuitarTF />
            </Route>
            <Route path="/GuitarLHS">
              <GuitarLHS />
            </Route>
            <Route path="/GuitarLHSSC">
              <GuitarLHSSC />
            </Route>
            <Route path="/GuitarRHFSS">
              <GuitarRHFSS />
            </Route>
            <Route path="/GuitarRHFP">
              <GuitarRHFP />
            </Route>
            <Route path="/GuitarMRHT">
              <GuitarMRHT />
            </Route>
            <Route path="/GuitarH">
              <GuitarH />
            </Route>
            <Route path="/GuitarGT">
              <GuitarGT />
            </Route>
            <Route path="/GuitarCE">
              <GuitarCE />
            </Route>

            <Route path="/celloSF">
              <CelloSF />
            </Route>
            <Route path="/celloNH">
              <CelloNH />
            </Route>
            <Route path="/celloAH">
              <CelloAH />
            </Route>
            <Route path="/celloMS">
              <CelloMS />
            </Route>
            <Route path="/celloLHI">
              <CelloLHI />
            </Route>
            <Route path="/celloRHI">
              <CelloRHI />
            </Route>
            <Route path="/bowDirectionsSpeedPressure">
              <CelloBDSP />
            </Route>
            <Route path="/moreBowColors">
              <CelloMBC />
            </Route>
            <Route path="/pizzicato">
              <CelloP />
            </Route>
            <Route path="/scalesStringColors">
              <ViolinSSC />
            </Route>
            <Route path="/arpeggiosDoubleStops">
              <ViolinADS />
            </Route>
            <Route path="/harmonicsVibratoGlissando">
              <ViolinHVG />
            </Route>
            <Route path="/articulationAndBowColors">
              <ViolinABC />
            </Route>
            <Route path="/moreVBowColors">
              <ViolinMBC />
            </Route>
            <Route path="/pizzicatoV">
              <ViolinP />
            </Route>
            <Route path="/scalesTrillsStringColors">
              <ViolaSTSC />
            </Route>
            <Route path="/passagesV">
              <ViolinPs />
            </Route>
            <Route path="/arpeggiosDoubleStopsVa">
              <ViolaADS />
            </Route>
            <Route path="/harmonicsVibratoGlissandoVa">
              <ViolaHVG />
            </Route>
            <Route path="/articulationColorsVa">
              <ViolaAC />
            </Route>
            <Route path="/moreBowColorsVa">
              <ViolaMBC />
            </Route>
            <Route path="/colLegnoPizzicatoVa">
              <ViolaCLP />
            </Route>
            <Route path="/morePizzicatoColorsVa">
              <ViolaMPC />
            </Route>
            <Route path="/passageVa">
              <ViolaPa />
            </Route>
            <Route path="/leftHandFingeringB">
              <BassLHF />
            </Route>
            <Route path="/registerStringColorsB">
              <BassRSC />
            </Route>
            <Route path="/articulationColorsB">
              <BassAC />
            </Route>
            <Route path="/moreBowColorsB">
              <BassMBC />
            </Route>
            <Route path="/pizzicatoB">
              <BassPz />
            </Route>
            <Route path="/excerptB">
              <BassEx />
            </Route>
            <Route path="/stringLengthChart">
              <StringLengthChart />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <div className="background">
      </div>
      <div className="body" style={{paddingLeft: 10}}>
        <h2>Welcome to Instrument Studies for Eyes and Ears!</h2>
        <p style={{background: 'red', width: '750px'}}><b>3/5/22, 5:22PM: The videos on the site are temporarily broken. Please use this temporary
        link for the time being: <a href="https://6223e2ead02cc2000867b92d--adoring-yonath-076396.netlify.app/">https://6223e2ead02cc2000867b92d--adoring-yonath-076396.netlify.app/</a></b></p>
        <p>Created by Don Freund</p>
        <p>Site designed by Reid Merzbacher</p>
        <p>Pages assembled by Don Freund, Reid Merzbacher, Felipe Tovar-Henao, and Jeff Sabol</p>
        <p>Please contact rmerzbacher@gmail.com to report any problems with the site</p>
      </div>
    </div>
  );
}
