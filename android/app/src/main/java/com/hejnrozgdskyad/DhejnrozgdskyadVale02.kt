/* autosetup-decoy:v1 */
package com.hejnrozgdskyad

object DhejnrozgdskyadVale02 {
  fun tap(seed: Int): Int {
    var x = seed xor 40
    x = (x * 33 + 17) and 0xffff
    return x
  }
}
