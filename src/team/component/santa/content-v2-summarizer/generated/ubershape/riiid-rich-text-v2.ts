export interface $ShapeSelection {'document-sections'?:{'children'?: true,},'document-block-elements'?:{'children'?: true,},'document-inline-elements'?:{'children'?: true,},'section'?:{'children'?: true,},'block-element'?:{'heading'?: true,'paragraph'?: true,'figure'?: true,'line-numbered-area'?: true,'precalculated-line-numbered-area'?: true,'dialog-list'?: true,'note'?: true,'table'?: true,},'inline-element'?:{'text'?: true,'math-expression'?: true,'image'?: true,'point'?: true,'refer-to'?: true,'referred-by'?: true,'blank'?: true,},'math-expression'?:{'tex'?: true,},'heading'?:{'level'?: true,'align'?: true,'children'?: true,},'paragraph'?:{'align'?: true,'numbering'?: true,'indent-level'?: true,'children'?: true,},'figure'?:{'element'?: true,'caption'?: true,},'figure-element'?:{'image'?: true,},'line-numbered-area'?:{'children'?: true,},'precalculated-line-numbered-area'?:{'lines'?: true,},'precalculated-line'?:{'children'?: true,},'dialog-list'?:{'children'?: true,},'dialog'?:{'children'?: true,'by'?: true,'at'?: true,},'text'?:{'value'?: true,'weight'?: true,'italic'?: true,'underline'?: true,'strike'?: true,'supsub'?: true,'color'?: true,'font-size'?: true,'font-family'?: true,},'tex'?:{'value'?: true,},'image'?:{'src'?: true,'alt'?: true,'width'?: true,'height'?: true,},'table'?:{'head'?: true,'body'?: true,'foot'?: true,},'table-head'?:{'rows'?: true,},'table-body'?:{'rows'?: true,},'table-foot'?:{'rows'?: true,},'table-row'?:{'cells'?: true,},'table-cell'?:{'align'?: true,'colspan'?: true,'rowspan'?: true,'children'?: true,'background'?: true,'realtor-background'?: true,},'point'?:{'id'?: true,},'refer-to'?:{'start-point-id'?: true,'end-point-id'?: true,},'referred-by'?:{'by'?: true,'children'?: true,},'note'?:{'children'?: true,},'blank'?:{'number'?: true,},'realtor-table-cell-background'?:{'#none'?: true,'#strong'?: true,},'text-weight'?:{'#w100'?: true,'#w200'?: true,'#w300'?: true,'#w400'?: true,'#w500'?: true,'#w600'?: true,'#w700'?: true,'#w800'?: true,'#w900'?: true,},'text-align'?:{'#justify'?: true,'#left'?: true,'#center'?: true,'#right'?: true,},'supsub'?:{'#none'?: true,'#sup'?: true,'#sub'?: true,},'heading-level'?:{'#h1'?: true,'#h2'?: true,'#h3'?: true,'#h4'?: true,'#h5'?: true,'#h6'?: true,},'numbering'?:{'#none'?: true,'#disc'?: true,'#decimal'?: true,'#upper-roman'?: true,'#lower-roman'?: true,},}

    function every(arr: any[], fn: (value: any) => boolean) {
      if (!Array.isArray(arr)) return false;
      return arr.every(fn);
    }
    function isBoolean(value: any) { return typeof value === 'boolean'; }
    function isNumber(value: any) { return typeof value === 'number'; }
    function isString(value: any) { return typeof value === 'string'; }
  

export function encodeDocumentSections(value: DocumentSections): string {return JSON.stringify(value);}
export function decodeDocumentSections(value: string): DocumentSections { const obj = JSON.parse(value); if (!isDocumentSections(obj)) throw new Error(); return obj; }
export function encodeDocumentBlockElements(value: DocumentBlockElements): string {return JSON.stringify(value);}
export function decodeDocumentBlockElements(value: string): DocumentBlockElements { const obj = JSON.parse(value); if (!isDocumentBlockElements(obj)) throw new Error(); return obj; }
export function encodeDocumentInlineElements(value: DocumentInlineElements): string {return JSON.stringify(value);}
export function decodeDocumentInlineElements(value: string): DocumentInlineElements { const obj = JSON.parse(value); if (!isDocumentInlineElements(obj)) throw new Error(); return obj; }
export const roots = ['document-sections','document-block-elements','document-inline-elements'] as const;

export interface DocumentSections {'children'?: Section[];
}
export function isDocumentSections(value: any): value is DocumentSections {
      if (value == null) return false;
      if (typeof value !== 'object') return false;
      if (value['children'] != null && !every(value['children'], isSection)) {return false;}
      return true;
    }

export interface DocumentBlockElements {'children'?: BlockElement[];
}
export function isDocumentBlockElements(value: any): value is DocumentBlockElements {
      if (value == null) return false;
      if (typeof value !== 'object') return false;
      if (value['children'] != null && !every(value['children'], isBlockElement)) {return false;}
      return true;
    }

export interface DocumentInlineElements {'children'?: InlineElement[];
}
export function isDocumentInlineElements(value: any): value is DocumentInlineElements {
      if (value == null) return false;
      if (typeof value !== 'object') return false;
      if (value['children'] != null && !every(value['children'], isInlineElement)) {return false;}
      return true;
    }
/**
 * 섹션
 */
export interface Section {'children'?: BlockElement[];
}
export function isSection(value: any): value is Section {
      if (value == null) return false;
      if (typeof value !== 'object') return false;
      if (value['children'] != null && !every(value['children'], isBlockElement)) {return false;}
      return true;
    }
/**
 * 블록 엘리먼트
 */
export type BlockElement = | ['heading', Heading]
| ['paragraph', Paragraph]
| ['figure', Figure]
| ['line-numbered-area', LineNumberedArea]
| ['precalculated-line-numbered-area', PrecalculatedLineNumberedArea]
| ['dialog-list', DialogList]
| ['note', Note]
| ['table', Table]
;
export function isBlockElement(value: any): value is BlockElement {
      if (!Array.isArray(value)) return false;
      if (value.length !== 2) return false;
      switch (value[0]) {case 'heading': return isHeading(value[1]);case 'paragraph': return isParagraph(value[1]);case 'figure': return isFigure(value[1]);case 'line-numbered-area': return isLineNumberedArea(value[1]);case 'precalculated-line-numbered-area': return isPrecalculatedLineNumberedArea(value[1]);case 'dialog-list': return isDialogList(value[1]);case 'note': return isNote(value[1]);case 'table': return isTable(value[1]); default: return false;
      }
    }

export type InlineElement = | ['text', Text]
| ['math-expression', MathExpression]
| ['image', Image]
| ['point', Point]
| ['refer-to', ReferTo]
| ['referred-by', ReferredBy]
| ['blank', Blank]
;
export function isInlineElement(value: any): value is InlineElement {
      if (!Array.isArray(value)) return false;
      if (value.length !== 2) return false;
      switch (value[0]) {case 'text': return isText(value[1]);case 'math-expression': return isMathExpression(value[1]);case 'image': return isImage(value[1]);case 'point': return isPoint(value[1]);case 'refer-to': return isReferTo(value[1]);case 'referred-by': return isReferredBy(value[1]);case 'blank': return isBlank(value[1]); default: return false;
      }
    }

export type MathExpression = | ['tex', Tex]
;
export function isMathExpression(value: any): value is MathExpression {
      if (!Array.isArray(value)) return false;
      if (value.length !== 2) return false;
      switch (value[0]) {case 'tex': return isTex(value[1]); default: return false;
      }
    }

export interface Heading {'level'?: HeadingLevel;
'align'?: TextAlign;
'children'?: InlineElement[];
}
export function isHeading(value: any): value is Heading {
      if (value == null) return false;
      if (typeof value !== 'object') return false;
      if (value['level'] != null && !isHeadingLevel(value['level'])) {return false;}if (value['align'] != null && !isTextAlign(value['align'])) {return false;}if (value['children'] != null && !every(value['children'], isInlineElement)) {return false;}
      return true;
    }
/**
 * 문단
 */
export interface Paragraph {'align'?: TextAlign;
'numbering'?: Numbering;
'indent-level'?: number;
'children'?: InlineElement[];
}
export function isParagraph(value: any): value is Paragraph {
      if (value == null) return false;
      if (typeof value !== 'object') return false;
      if (value['align'] != null && !isTextAlign(value['align'])) {return false;}if (value['numbering'] != null && !isNumbering(value['numbering'])) {return false;}if (value['indent-level'] != null && !isNumber(value['indent-level'])) {return false;}if (value['children'] != null && !every(value['children'], isInlineElement)) {return false;}
      return true;
    }
/**
 * 캡션이 있는 삽화, 도표 등
 */
export interface Figure {'element'?: FigureElement;
'caption'?: InlineElement[];
}
export function isFigure(value: any): value is Figure {
      if (value == null) return false;
      if (typeof value !== 'object') return false;
      if (value['element'] != null && !isFigureElement(value['element'])) {return false;}if (value['caption'] != null && !every(value['caption'], isInlineElement)) {return false;}
      return true;
    }

export type FigureElement = | ['image', Image]
;
export function isFigureElement(value: any): value is FigureElement {
      if (!Array.isArray(value)) return false;
      if (value.length !== 2) return false;
      switch (value[0]) {case 'image': return isImage(value[1]); default: return false;
      }
    }

export interface LineNumberedArea {'children'?: BlockElement[];
}
export function isLineNumberedArea(value: any): value is LineNumberedArea {
      if (value == null) return false;
      if (typeof value !== 'object') return false;
      if (value['children'] != null && !every(value['children'], isBlockElement)) {return false;}
      return true;
    }

export interface PrecalculatedLineNumberedArea {'lines'?: PrecalculatedLine[];
}
export function isPrecalculatedLineNumberedArea(value: any): value is PrecalculatedLineNumberedArea {
      if (value == null) return false;
      if (typeof value !== 'object') return false;
      if (value['lines'] != null && !every(value['lines'], isPrecalculatedLine)) {return false;}
      return true;
    }

export interface PrecalculatedLine {'children'?: InlineElement[];
}
export function isPrecalculatedLine(value: any): value is PrecalculatedLine {
      if (value == null) return false;
      if (typeof value !== 'object') return false;
      if (value['children'] != null && !every(value['children'], isInlineElement)) {return false;}
      return true;
    }

export interface DialogList {'children'?: Dialog[];
}
export function isDialogList(value: any): value is DialogList {
      if (value == null) return false;
      if (typeof value !== 'object') return false;
      if (value['children'] != null && !every(value['children'], isDialog)) {return false;}
      return true;
    }

export interface Dialog {'children'?: InlineElement[];
'by'?: string;
'at'?: string;
}
export function isDialog(value: any): value is Dialog {
      if (value == null) return false;
      if (typeof value !== 'object') return false;
      if (value['children'] != null && !every(value['children'], isInlineElement)) {return false;}if (value['by'] != null && !isString(value['by'])) {return false;}if (value['at'] != null && !isString(value['at'])) {return false;}
      return true;
    }
/**
 * 텍스트
 */
export interface Text {'value'?: string;
'weight'?: TextWeight;
'italic'?: boolean;
'underline'?: boolean;
'strike'?: boolean;
'supsub'?: Supsub;
'color'?: string;
'font-size'?: string;
'font-family'?: string;
}
export function isText(value: any): value is Text {
      if (value == null) return false;
      if (typeof value !== 'object') return false;
      if (value['value'] != null && !isString(value['value'])) {return false;}if (value['weight'] != null && !isTextWeight(value['weight'])) {return false;}if (value['italic'] != null && !isBoolean(value['italic'])) {return false;}if (value['underline'] != null && !isBoolean(value['underline'])) {return false;}if (value['strike'] != null && !isBoolean(value['strike'])) {return false;}if (value['supsub'] != null && !isSupsub(value['supsub'])) {return false;}if (value['color'] != null && !isString(value['color'])) {return false;}if (value['font-size'] != null && !isString(value['font-size'])) {return false;}if (value['font-family'] != null && !isString(value['font-family'])) {return false;}
      return true;
    }
/**
 * 수식
 */
export interface Tex {'value'?: string;
}
export function isTex(value: any): value is Tex {
      if (value == null) return false;
      if (typeof value !== 'object') return false;
      if (value['value'] != null && !isString(value['value'])) {return false;}
      return true;
    }
/**
 * 이미지
 */
export interface Image {'src'?: string;
'alt'?: string;
'width'?: number;
'height'?: number;
}
export function isImage(value: any): value is Image {
      if (value == null) return false;
      if (typeof value !== 'object') return false;
      if (value['src'] != null && !isString(value['src'])) {return false;}if (value['alt'] != null && !isString(value['alt'])) {return false;}if (value['width'] != null && !isNumber(value['width'])) {return false;}if (value['height'] != null && !isNumber(value['height'])) {return false;}
      return true;
    }
/**
 * 테이블
 */
export interface Table {'head'?: TableHead;
'body'?: TableBody;
'foot'?: TableFoot;
}
export function isTable(value: any): value is Table {
      if (value == null) return false;
      if (typeof value !== 'object') return false;
      if (value['head'] != null && !isTableHead(value['head'])) {return false;}if (value['body'] != null && !isTableBody(value['body'])) {return false;}if (value['foot'] != null && !isTableFoot(value['foot'])) {return false;}
      return true;
    }

export interface TableHead {'rows'?: TableRow[];
}
export function isTableHead(value: any): value is TableHead {
      if (value == null) return false;
      if (typeof value !== 'object') return false;
      if (value['rows'] != null && !every(value['rows'], isTableRow)) {return false;}
      return true;
    }

export interface TableBody {'rows'?: TableRow[];
}
export function isTableBody(value: any): value is TableBody {
      if (value == null) return false;
      if (typeof value !== 'object') return false;
      if (value['rows'] != null && !every(value['rows'], isTableRow)) {return false;}
      return true;
    }

export interface TableFoot {'rows'?: TableRow[];
}
export function isTableFoot(value: any): value is TableFoot {
      if (value == null) return false;
      if (typeof value !== 'object') return false;
      if (value['rows'] != null && !every(value['rows'], isTableRow)) {return false;}
      return true;
    }

export interface TableRow {'cells'?: TableCell[];
}
export function isTableRow(value: any): value is TableRow {
      if (value == null) return false;
      if (typeof value !== 'object') return false;
      if (value['cells'] != null && !every(value['cells'], isTableCell)) {return false;}
      return true;
    }

export interface TableCell {'align'?: TextAlign;
'colspan'?: number;
'rowspan'?: number;
'children'?: BlockElement[];
'background'?: string;
'realtor-background'?: RealtorTableCellBackground;
}
export function isTableCell(value: any): value is TableCell {
      if (value == null) return false;
      if (typeof value !== 'object') return false;
      if (value['align'] != null && !isTextAlign(value['align'])) {return false;}if (value['colspan'] != null && !isNumber(value['colspan'])) {return false;}if (value['rowspan'] != null && !isNumber(value['rowspan'])) {return false;}if (value['children'] != null && !every(value['children'], isBlockElement)) {return false;}if (value['background'] != null && !isString(value['background'])) {return false;}if (value['realtor-background'] != null && !isRealtorTableCellBackground(value['realtor-background'])) {return false;}
      return true;
    }

export interface Point {'id'?: string;
}
export function isPoint(value: any): value is Point {
      if (value == null) return false;
      if (typeof value !== 'object') return false;
      if (value['id'] != null && !isString(value['id'])) {return false;}
      return true;
    }

export interface ReferTo {'start-point-id'?: string;
'end-point-id'?: string;
}
export function isReferTo(value: any): value is ReferTo {
      if (value == null) return false;
      if (typeof value !== 'object') return false;
      if (value['start-point-id'] != null && !isString(value['start-point-id'])) {return false;}if (value['end-point-id'] != null && !isString(value['end-point-id'])) {return false;}
      return true;
    }

export interface ReferredBy {'by'?: string;
'children'?: InlineElement[];
}
export function isReferredBy(value: any): value is ReferredBy {
      if (value == null) return false;
      if (typeof value !== 'object') return false;
      if (value['by'] != null && !isString(value['by'])) {return false;}if (value['children'] != null && !every(value['children'], isInlineElement)) {return false;}
      return true;
    }

export interface Note {'children'?: InlineElement[];
}
export function isNote(value: any): value is Note {
      if (value == null) return false;
      if (typeof value !== 'object') return false;
      if (value['children'] != null && !every(value['children'], isInlineElement)) {return false;}
      return true;
    }

export interface Blank {'number'?: number;
}
export function isBlank(value: any): value is Blank {
      if (value == null) return false;
      if (typeof value !== 'object') return false;
      if (value['number'] != null && !isNumber(value['number'])) {return false;}
      return true;
    }

export type RealtorTableCellBackground = |'#none'|'#strong';
export function isRealtorTableCellBackground(value: any): value is RealtorTableCellBackground {
      if (typeof value !== 'string') return false;
      return !!isRealtorTableCellBackground.table[value as keyof (typeof isRealtorTableCellBackground)['table']];
    }
isRealtorTableCellBackground.table = {'#none':true,'#strong':true} as const;
/**
 * 텍스트 두께
 */
export type TextWeight = |'#w100'|'#w200'|'#w300'|'#w400'|'#w500'|'#w600'|'#w700'|'#w800'|'#w900';
export function isTextWeight(value: any): value is TextWeight {
      if (typeof value !== 'string') return false;
      return !!isTextWeight.table[value as keyof (typeof isTextWeight)['table']];
    }
isTextWeight.table = {'#w100':true,'#w200':true,'#w300':true,'#w400':true,'#w500':true,'#w600':true,'#w700':true,'#w800':true,'#w900':true} as const;
/**
 * 텍스트 정렬
 */
export type TextAlign = |'#justify'|'#left'|'#center'|'#right';
export function isTextAlign(value: any): value is TextAlign {
      if (typeof value !== 'string') return false;
      return !!isTextAlign.table[value as keyof (typeof isTextAlign)['table']];
    }
isTextAlign.table = {'#justify':true,'#left':true,'#center':true,'#right':true} as const;
/**
 * 텍스트 윗첨자 아랫첨자
 */
export type Supsub = |'#none'|'#sup'|'#sub';
export function isSupsub(value: any): value is Supsub {
      if (typeof value !== 'string') return false;
      return !!isSupsub.table[value as keyof (typeof isSupsub)['table']];
    }
isSupsub.table = {'#none':true,'#sup':true,'#sub':true} as const;
/**
 * 제목 단계
 */
export type HeadingLevel = |'#h1'|'#h2'|'#h3'|'#h4'|'#h5'|'#h6';
export function isHeadingLevel(value: any): value is HeadingLevel {
      if (typeof value !== 'string') return false;
      return !!isHeadingLevel.table[value as keyof (typeof isHeadingLevel)['table']];
    }
isHeadingLevel.table = {'#h1':true,'#h2':true,'#h3':true,'#h4':true,'#h5':true,'#h6':true} as const;
/**
 * 번호 매기기
 */
export type Numbering = |'#none'|'#disc'|'#decimal'|'#upper-roman'|'#lower-roman';
export function isNumbering(value: any): value is Numbering {
      if (typeof value !== 'string') return false;
      return !!isNumbering.table[value as keyof (typeof isNumbering)['table']];
    }
isNumbering.table = {'#none':true,'#disc':true,'#decimal':true,'#upper-roman':true,'#lower-roman':true} as const;
export interface Visitor {visitDocumentSections(visitor: Visitor, value: DocumentSections): DocumentSections;
visitDocumentBlockElements(visitor: Visitor, value: DocumentBlockElements): DocumentBlockElements;
visitDocumentInlineElements(visitor: Visitor, value: DocumentInlineElements): DocumentInlineElements;
visitSection(visitor: Visitor, value: Section): Section;
visitBlockElement(visitor: Visitor, value: BlockElement): BlockElement;
visitInlineElement(visitor: Visitor, value: InlineElement): InlineElement;
visitMathExpression(visitor: Visitor, value: MathExpression): MathExpression;
visitHeading(visitor: Visitor, value: Heading): Heading;
visitParagraph(visitor: Visitor, value: Paragraph): Paragraph;
visitFigure(visitor: Visitor, value: Figure): Figure;
visitFigureElement(visitor: Visitor, value: FigureElement): FigureElement;
visitLineNumberedArea(visitor: Visitor, value: LineNumberedArea): LineNumberedArea;
visitPrecalculatedLineNumberedArea(visitor: Visitor, value: PrecalculatedLineNumberedArea): PrecalculatedLineNumberedArea;
visitPrecalculatedLine(visitor: Visitor, value: PrecalculatedLine): PrecalculatedLine;
visitDialogList(visitor: Visitor, value: DialogList): DialogList;
visitDialog(visitor: Visitor, value: Dialog): Dialog;
visitText(visitor: Visitor, value: Text): Text;
visitTex(visitor: Visitor, value: Tex): Tex;
visitImage(visitor: Visitor, value: Image): Image;
visitTable(visitor: Visitor, value: Table): Table;
visitTableHead(visitor: Visitor, value: TableHead): TableHead;
visitTableBody(visitor: Visitor, value: TableBody): TableBody;
visitTableFoot(visitor: Visitor, value: TableFoot): TableFoot;
visitTableRow(visitor: Visitor, value: TableRow): TableRow;
visitTableCell(visitor: Visitor, value: TableCell): TableCell;
visitPoint(visitor: Visitor, value: Point): Point;
visitReferTo(visitor: Visitor, value: ReferTo): ReferTo;
visitReferredBy(visitor: Visitor, value: ReferredBy): ReferredBy;
visitNote(visitor: Visitor, value: Note): Note;
visitBlank(visitor: Visitor, value: Blank): Blank;
visitRealtorTableCellBackground(visitor: Visitor, value: RealtorTableCellBackground): RealtorTableCellBackground;
visitTextWeight(visitor: Visitor, value: TextWeight): TextWeight;
visitTextAlign(visitor: Visitor, value: TextAlign): TextAlign;
visitSupsub(visitor: Visitor, value: Supsub): Supsub;
visitHeadingLevel(visitor: Visitor, value: HeadingLevel): HeadingLevel;
visitNumbering(visitor: Visitor, value: Numbering): Numbering;}
export const visitor: Visitor = {
    visitDocumentSections(visitor, _value) {
      const value = {..._value}; if (value['children'] != null) {
          value['children'] = value['children'].map(x => visitor.visitSection(visitor, x))
        }
    return value;
  },

    visitDocumentBlockElements(visitor, _value) {
      const value = {..._value}; if (value['children'] != null) {
          value['children'] = value['children'].map(x => visitor.visitBlockElement(visitor, x))
        }
    return value;
  },

    visitDocumentInlineElements(visitor, _value) {
      const value = {..._value}; if (value['children'] != null) {
          value['children'] = value['children'].map(x => visitor.visitInlineElement(visitor, x))
        }
    return value;
  },

    visitSection(visitor, _value) {
      const value = {..._value}; if (value['children'] != null) {
          value['children'] = value['children'].map(x => visitor.visitBlockElement(visitor, x))
        }
    return value;
  },
visitBlockElement(visitor, value) {
    switch (value[0]) {
      case 'heading':
        return [value[0], visitor.visitHeading(visitor, value[1])];
        

      case 'paragraph':
        return [value[0], visitor.visitParagraph(visitor, value[1])];
        

      case 'figure':
        return [value[0], visitor.visitFigure(visitor, value[1])];
        

      case 'line-numbered-area':
        return [value[0], visitor.visitLineNumberedArea(visitor, value[1])];
        

      case 'precalculated-line-numbered-area':
        return [value[0], visitor.visitPrecalculatedLineNumberedArea(visitor, value[1])];
        

      case 'dialog-list':
        return [value[0], visitor.visitDialogList(visitor, value[1])];
        

      case 'note':
        return [value[0], visitor.visitNote(visitor, value[1])];
        

      case 'table':
        return [value[0], visitor.visitTable(visitor, value[1])];
        
      default:
        return value;
    }
  },
visitInlineElement(visitor, value) {
    switch (value[0]) {
      case 'text':
        return [value[0], visitor.visitText(visitor, value[1])];
        

      case 'math-expression':
        return [value[0], visitor.visitMathExpression(visitor, value[1])];
        

      case 'image':
        return [value[0], visitor.visitImage(visitor, value[1])];
        

      case 'point':
        return [value[0], visitor.visitPoint(visitor, value[1])];
        

      case 'refer-to':
        return [value[0], visitor.visitReferTo(visitor, value[1])];
        

      case 'referred-by':
        return [value[0], visitor.visitReferredBy(visitor, value[1])];
        

      case 'blank':
        return [value[0], visitor.visitBlank(visitor, value[1])];
        
      default:
        return value;
    }
  },
visitMathExpression(visitor, value) {
    switch (value[0]) {
      case 'tex':
        return [value[0], visitor.visitTex(visitor, value[1])];
        
      default:
        return value;
    }
  },

    visitHeading(visitor, _value) {
      const value = {..._value}; if (value['level'] != null) {
          value['level'] = visitor.visitHeadingLevel(visitor, value['level'])
        }
if (value['align'] != null) {
          value['align'] = visitor.visitTextAlign(visitor, value['align'])
        }
if (value['children'] != null) {
          value['children'] = value['children'].map(x => visitor.visitInlineElement(visitor, x))
        }
    return value;
  },

    visitParagraph(visitor, _value) {
      const value = {..._value}; if (value['align'] != null) {
          value['align'] = visitor.visitTextAlign(visitor, value['align'])
        }
if (value['numbering'] != null) {
          value['numbering'] = visitor.visitNumbering(visitor, value['numbering'])
        }
if (value['children'] != null) {
          value['children'] = value['children'].map(x => visitor.visitInlineElement(visitor, x))
        }
    return value;
  },

    visitFigure(visitor, _value) {
      const value = {..._value}; if (value['element'] != null) {
          value['element'] = visitor.visitFigureElement(visitor, value['element'])
        }
if (value['caption'] != null) {
          value['caption'] = value['caption'].map(x => visitor.visitInlineElement(visitor, x))
        }
    return value;
  },
visitFigureElement(visitor, value) {
    switch (value[0]) {
      case 'image':
        return [value[0], visitor.visitImage(visitor, value[1])];
        
      default:
        return value;
    }
  },

    visitLineNumberedArea(visitor, _value) {
      const value = {..._value}; if (value['children'] != null) {
          value['children'] = value['children'].map(x => visitor.visitBlockElement(visitor, x))
        }
    return value;
  },

    visitPrecalculatedLineNumberedArea(visitor, _value) {
      const value = {..._value}; if (value['lines'] != null) {
          value['lines'] = value['lines'].map(x => visitor.visitPrecalculatedLine(visitor, x))
        }
    return value;
  },

    visitPrecalculatedLine(visitor, _value) {
      const value = {..._value}; if (value['children'] != null) {
          value['children'] = value['children'].map(x => visitor.visitInlineElement(visitor, x))
        }
    return value;
  },

    visitDialogList(visitor, _value) {
      const value = {..._value}; if (value['children'] != null) {
          value['children'] = value['children'].map(x => visitor.visitDialog(visitor, x))
        }
    return value;
  },

    visitDialog(visitor, _value) {
      const value = {..._value}; if (value['children'] != null) {
          value['children'] = value['children'].map(x => visitor.visitInlineElement(visitor, x))
        }
    return value;
  },

    visitText(visitor, _value) {
      const value = {..._value}; if (value['weight'] != null) {
          value['weight'] = visitor.visitTextWeight(visitor, value['weight'])
        }
if (value['supsub'] != null) {
          value['supsub'] = visitor.visitSupsub(visitor, value['supsub'])
        }
    return value;
  },

    visitTex(visitor, _value) {
      const value = {..._value}; 
    return value;
  },

    visitImage(visitor, _value) {
      const value = {..._value}; 
    return value;
  },

    visitTable(visitor, _value) {
      const value = {..._value}; if (value['head'] != null) {
          value['head'] = visitor.visitTableHead(visitor, value['head'])
        }
if (value['body'] != null) {
          value['body'] = visitor.visitTableBody(visitor, value['body'])
        }
if (value['foot'] != null) {
          value['foot'] = visitor.visitTableFoot(visitor, value['foot'])
        }
    return value;
  },

    visitTableHead(visitor, _value) {
      const value = {..._value}; if (value['rows'] != null) {
          value['rows'] = value['rows'].map(x => visitor.visitTableRow(visitor, x))
        }
    return value;
  },

    visitTableBody(visitor, _value) {
      const value = {..._value}; if (value['rows'] != null) {
          value['rows'] = value['rows'].map(x => visitor.visitTableRow(visitor, x))
        }
    return value;
  },

    visitTableFoot(visitor, _value) {
      const value = {..._value}; if (value['rows'] != null) {
          value['rows'] = value['rows'].map(x => visitor.visitTableRow(visitor, x))
        }
    return value;
  },

    visitTableRow(visitor, _value) {
      const value = {..._value}; if (value['cells'] != null) {
          value['cells'] = value['cells'].map(x => visitor.visitTableCell(visitor, x))
        }
    return value;
  },

    visitTableCell(visitor, _value) {
      const value = {..._value}; if (value['align'] != null) {
          value['align'] = visitor.visitTextAlign(visitor, value['align'])
        }
if (value['realtor-background'] != null) {
          value['realtor-background'] = visitor.visitRealtorTableCellBackground(visitor, value['realtor-background'])
        }
if (value['children'] != null) {
          value['children'] = value['children'].map(x => visitor.visitBlockElement(visitor, x))
        }
    return value;
  },

    visitPoint(visitor, _value) {
      const value = {..._value}; 
    return value;
  },

    visitReferTo(visitor, _value) {
      const value = {..._value}; 
    return value;
  },

    visitReferredBy(visitor, _value) {
      const value = {..._value}; if (value['children'] != null) {
          value['children'] = value['children'].map(x => visitor.visitInlineElement(visitor, x))
        }
    return value;
  },

    visitNote(visitor, _value) {
      const value = {..._value}; if (value['children'] != null) {
          value['children'] = value['children'].map(x => visitor.visitInlineElement(visitor, x))
        }
    return value;
  },

    visitBlank(visitor, _value) {
      const value = {..._value}; 
    return value;
  },
visitRealtorTableCellBackground(visitor, value) {
    return value;
  },
visitTextWeight(visitor, value) {
    return value;
  },
visitTextAlign(visitor, value) {
    return value;
  },
visitSupsub(visitor, value) {
    return value;
  },
visitHeadingLevel(visitor, value) {
    return value;
  },
visitNumbering(visitor, value) {
    return value;
  }};