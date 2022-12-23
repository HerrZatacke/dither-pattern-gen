// Taken from https://stackoverflow.com/a/67983386/4664881

// Functions for solving cubic equation
function cuberoot(x) {
  const y = Math.abs(x) ** (1 / 3);
  return x < 0 ? -y : y;
}

/* eslint-disable no-param-reassign */
function solveCubic(a, b, c, d) {
  if (Math.abs(a) < Number.EPSILON) { // Quadratic case, ax^2+bx+c=0
    a = b;
    b = c;
    c = d;
    if (Math.abs(a) < Number.EPSILON) { // Linear case, ax+b=0
      a = b;
      b = c;
      if (Math.abs(a) < Number.EPSILON) {
        return [];
      }

      return [-b / a];
    }

    const D = (b * b) - (4 * a * c);
    if (Math.abs(D) < Number.EPSILON) {
      return [-b / (2 * a)];
    }

    if (D > 0) {
      return [(-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a)];
    }

    return [];
  }

  // Convert to depressed cubic t^3+pt+q = 0 (subst x = t - b/3a)
  const p = ((3 * a * c) - (b * b)) / (3 * a * a);
  const q = ((2 * b * b * b) - (9 * a * b * c) + (27 * a * a * d)) / (27 * a * a * a);
  let roots;

  if (Math.abs(p) < Number.EPSILON) { // p = 0 -> t^3 = -q -> t = -q^1/3
    roots = [cuberoot(-q)];
  } else if (Math.abs(q) < Number.EPSILON) { // q = 0 -> t^3 + pt = 0 -> t(t^2+p)=0
    roots = [0].concat(p < 0 ? [Math.sqrt(-p), -Math.sqrt(-p)] : []);
  } else {
    const D = (q * q / 4) + (p * p * p / 27);
    if (Math.abs(D) < Number.EPSILON) { // D = 0 -> two roots
      roots = [-1.5 * q / p, 3 * q / p];
    } else if (D > 0) { // Only one real root
      const u = cuberoot((-q / 2) - Math.sqrt(D));
      roots = [u - (p / (3 * u))];
    } else { // D < 0, three roots, but needs to use complex numbers/trigonometric solution
      const u = 2 * Math.sqrt(-p / 3);
      const t = Math.acos(3 * q / p / u) / 3; // D < 0 implies p < 0 and acos argument in [-1..1]
      const k = 2 * Math.PI / 3;
      roots = [u * Math.cos(t), u * Math.cos(t - k), u * Math.cos(t - (2 * k))];
    }
  }

  // Convert back from depressed cubic
  for (let i = 0; i < roots.length; i += 1) {
    roots[i] -= b / (3 * a);
  }

  return roots;
}

const getCubicBezierY = (a, b, p, q) => (x) => {
  // By the Cubic Bézier curve formula, we know that
  // 3(1-t)²ta + 3(1-t)t²p + t³ - x = 0
  // After formatting it to the cubic equation form, we have
  // (3a-3p+1)t³ + (3p-6a)t² + 3at - x = 0
  // Solve the equation
  const t = solveCubic((3 * a) - (3 * p) + 1, (3 * p) - (6 * a), 3 * a, -x)[0]; // There should be only 1 root
  const r = 1 - t;
  // Find y by using the Cubic Bezier curve formula
  return (3 * r * r * t * b) + (3 * r * t * t * q) + (t * t * t);
};

export default getCubicBezierY;
