import { Util, Collection } from './Util';
import { Factory, Validators } from './Factory';
import { Container } from './Container';
import {GetSet} from "./types";

/**
 * Group constructor.  Groups are used to contain shapes or other groups.
 * @constructor
 * @memberof Konva
 * @augments Konva.Container
 * @param {Object} config
 * @@nodeParams
 * @@containerParams
 * @example
 * var group = new Konva.Group();
 */
export class Group extends Container {
  needReorder: boolean = false;

  _validateAdd(child) {
    var type = child.getType();
    if (type !== 'Group' && type !== 'Shape') {
      Util.throw('You may only add groups and shapes to groups.');
    }
  }

  add(child): this | this | this {
    this.needReorder = true;
    return super.add(child);
  }

  _drawChildren(canvas, drawMethod, top, caching?, skipBuffer?, skipComposition?) {
    if(this.needReorder == true) {
      this._reorderChildrenByZIndex();
    }
    super._drawChildren(canvas, drawMethod, top, caching, skipBuffer, skipComposition);
  }

  _reorderChildrenByZIndex() {
    let tmpArr = this.children.toArray();

    tmpArr.sort((childA, childB) => {
      return childA.z() - childB.z();
    });

    this.children = new Collection();
    tmpArr.forEach((child) => {
      this.children.push(child);
    });

    this.needReorder = false;
  }

  zIndexEnabled: GetSet<boolean, this>;
}

Group.prototype.nodeType = 'Group';

Factory.addGetterSetter(Group, 'zIndexEnabled', 0, Validators.getBooleanValidator());

/**
 * get/set z index sort
 * @name Konva.Node#zIndexEnabled
 * @method
 * @param {Number} zIndexEnabled
 * @returns {Integer}
 * @example
 * // get zIndexEnabled
 * var zIndexEnabled = node.zIndexEnabled();
 *
 * // set zIndexEnabled
 * node.zIndexEnabled(true);
 */

Collection.mapMethods(Group);
