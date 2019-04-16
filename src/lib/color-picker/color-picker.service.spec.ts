import { TestBed } from '@angular/core/testing';
import { AoppsColorPickerService } from './color-picker.service';
import { EMPTY_COLOR, USED_COLORS } from './color-picker';
import { doesNotThrow } from 'assert';

describe('MccColorPickerService', () => {
  const color = '#FFFFFF';
  let service: AoppsColorPickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: EMPTY_COLOR, useValue: 'none'},
        { provide: USED_COLORS, useValue: []},
      ]
    });

    const emptyColorToken = TestBed.get(EMPTY_COLOR);
    const usedColorsToken = TestBed.get(USED_COLORS);
    service = new AoppsColorPickerService(emptyColorToken, usedColorsToken);
  });

  it('should add color', (done: DoneFn) => {
    service.addColor(color);
    service.getColors().subscribe(colors => {
      expect(colors[0]).toBe(color);
      done();
    });
  });

  it('should return undefined for the invalid color', (done: DoneFn) => {
    service.addColor(color);
    service.addColor('');
    service.getColors().subscribe(colors => {
      expect(colors.length).toBe(1);
      done();
    });
  });

  it('should not add the color because de color already exists', (done: DoneFn) => {
    service.addColor(color);
    service.addColor(color);
    service.getColors().subscribe(colors => {
      expect(colors.length).toBe(1);
      done();
    });
  });

  it('should reset used colors', (done: DoneFn) => {
    service.resetUseColors();
    service.getColors().subscribe(colors => {
      expect(colors.length).toBe(0);
      done();
    });
  });

});
