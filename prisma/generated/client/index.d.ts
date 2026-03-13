
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Monitor
 * 
 */
export type Monitor = $Result.DefaultSelection<Prisma.$MonitorPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Monitors
 * const monitors = await prisma.monitor.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Monitors
   * const monitors = await prisma.monitor.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.monitor`: Exposes CRUD operations for the **Monitor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Monitors
    * const monitors = await prisma.monitor.findMany()
    * ```
    */
  get monitor(): Prisma.MonitorDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.1
   * Query Engine version: f09f2815f091dbba658cdcd2264306d88bb5bda6
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Monitor: 'Monitor'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "monitor"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Monitor: {
        payload: Prisma.$MonitorPayload<ExtArgs>
        fields: Prisma.MonitorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonitorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonitorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitorPayload>
          }
          findFirst: {
            args: Prisma.MonitorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonitorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitorPayload>
          }
          findMany: {
            args: Prisma.MonitorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitorPayload>[]
          }
          create: {
            args: Prisma.MonitorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitorPayload>
          }
          createMany: {
            args: Prisma.MonitorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MonitorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitorPayload>[]
          }
          delete: {
            args: Prisma.MonitorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitorPayload>
          }
          update: {
            args: Prisma.MonitorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitorPayload>
          }
          deleteMany: {
            args: Prisma.MonitorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonitorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MonitorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitorPayload>[]
          }
          upsert: {
            args: Prisma.MonitorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitorPayload>
          }
          aggregate: {
            args: Prisma.MonitorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonitor>
          }
          groupBy: {
            args: Prisma.MonitorGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonitorGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonitorCountArgs<ExtArgs>
            result: $Utils.Optional<MonitorCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    monitor?: MonitorOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Monitor
   */

  export type AggregateMonitor = {
    _count: MonitorCountAggregateOutputType | null
    _avg: MonitorAvgAggregateOutputType | null
    _sum: MonitorSumAggregateOutputType | null
    _min: MonitorMinAggregateOutputType | null
    _max: MonitorMaxAggregateOutputType | null
  }

  export type MonitorAvgAggregateOutputType = {
    consecutive_failures: number | null
    last_response_ms: number | null
  }

  export type MonitorSumAggregateOutputType = {
    consecutive_failures: number | null
    last_response_ms: number | null
  }

  export type MonitorMinAggregateOutputType = {
    id: string | null
    host: string | null
    label: string | null
    enabled: boolean | null
    status: string | null
    consecutive_failures: number | null
    last_response_ms: number | null
    last_error: string | null
    last_checked_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MonitorMaxAggregateOutputType = {
    id: string | null
    host: string | null
    label: string | null
    enabled: boolean | null
    status: string | null
    consecutive_failures: number | null
    last_response_ms: number | null
    last_error: string | null
    last_checked_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MonitorCountAggregateOutputType = {
    id: number
    host: number
    label: number
    enabled: number
    status: number
    consecutive_failures: number
    last_response_ms: number
    last_error: number
    last_checked_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type MonitorAvgAggregateInputType = {
    consecutive_failures?: true
    last_response_ms?: true
  }

  export type MonitorSumAggregateInputType = {
    consecutive_failures?: true
    last_response_ms?: true
  }

  export type MonitorMinAggregateInputType = {
    id?: true
    host?: true
    label?: true
    enabled?: true
    status?: true
    consecutive_failures?: true
    last_response_ms?: true
    last_error?: true
    last_checked_at?: true
    created_at?: true
    updated_at?: true
  }

  export type MonitorMaxAggregateInputType = {
    id?: true
    host?: true
    label?: true
    enabled?: true
    status?: true
    consecutive_failures?: true
    last_response_ms?: true
    last_error?: true
    last_checked_at?: true
    created_at?: true
    updated_at?: true
  }

  export type MonitorCountAggregateInputType = {
    id?: true
    host?: true
    label?: true
    enabled?: true
    status?: true
    consecutive_failures?: true
    last_response_ms?: true
    last_error?: true
    last_checked_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type MonitorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Monitor to aggregate.
     */
    where?: MonitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monitors to fetch.
     */
    orderBy?: MonitorOrderByWithRelationInput | MonitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Monitors
    **/
    _count?: true | MonitorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonitorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonitorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonitorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonitorMaxAggregateInputType
  }

  export type GetMonitorAggregateType<T extends MonitorAggregateArgs> = {
        [P in keyof T & keyof AggregateMonitor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonitor[P]>
      : GetScalarType<T[P], AggregateMonitor[P]>
  }




  export type MonitorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonitorWhereInput
    orderBy?: MonitorOrderByWithAggregationInput | MonitorOrderByWithAggregationInput[]
    by: MonitorScalarFieldEnum[] | MonitorScalarFieldEnum
    having?: MonitorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonitorCountAggregateInputType | true
    _avg?: MonitorAvgAggregateInputType
    _sum?: MonitorSumAggregateInputType
    _min?: MonitorMinAggregateInputType
    _max?: MonitorMaxAggregateInputType
  }

  export type MonitorGroupByOutputType = {
    id: string
    host: string
    label: string | null
    enabled: boolean
    status: string
    consecutive_failures: number
    last_response_ms: number | null
    last_error: string | null
    last_checked_at: Date | null
    created_at: Date
    updated_at: Date
    _count: MonitorCountAggregateOutputType | null
    _avg: MonitorAvgAggregateOutputType | null
    _sum: MonitorSumAggregateOutputType | null
    _min: MonitorMinAggregateOutputType | null
    _max: MonitorMaxAggregateOutputType | null
  }

  type GetMonitorGroupByPayload<T extends MonitorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonitorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonitorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonitorGroupByOutputType[P]>
            : GetScalarType<T[P], MonitorGroupByOutputType[P]>
        }
      >
    >


  export type MonitorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    host?: boolean
    label?: boolean
    enabled?: boolean
    status?: boolean
    consecutive_failures?: boolean
    last_response_ms?: boolean
    last_error?: boolean
    last_checked_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["monitor"]>

  export type MonitorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    host?: boolean
    label?: boolean
    enabled?: boolean
    status?: boolean
    consecutive_failures?: boolean
    last_response_ms?: boolean
    last_error?: boolean
    last_checked_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["monitor"]>

  export type MonitorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    host?: boolean
    label?: boolean
    enabled?: boolean
    status?: boolean
    consecutive_failures?: boolean
    last_response_ms?: boolean
    last_error?: boolean
    last_checked_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["monitor"]>

  export type MonitorSelectScalar = {
    id?: boolean
    host?: boolean
    label?: boolean
    enabled?: boolean
    status?: boolean
    consecutive_failures?: boolean
    last_response_ms?: boolean
    last_error?: boolean
    last_checked_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type MonitorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "host" | "label" | "enabled" | "status" | "consecutive_failures" | "last_response_ms" | "last_error" | "last_checked_at" | "created_at" | "updated_at", ExtArgs["result"]["monitor"]>

  export type $MonitorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Monitor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      host: string
      label: string | null
      enabled: boolean
      status: string
      consecutive_failures: number
      last_response_ms: number | null
      last_error: string | null
      last_checked_at: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["monitor"]>
    composites: {}
  }

  type MonitorGetPayload<S extends boolean | null | undefined | MonitorDefaultArgs> = $Result.GetResult<Prisma.$MonitorPayload, S>

  type MonitorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MonitorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MonitorCountAggregateInputType | true
    }

  export interface MonitorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Monitor'], meta: { name: 'Monitor' } }
    /**
     * Find zero or one Monitor that matches the filter.
     * @param {MonitorFindUniqueArgs} args - Arguments to find a Monitor
     * @example
     * // Get one Monitor
     * const monitor = await prisma.monitor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonitorFindUniqueArgs>(args: SelectSubset<T, MonitorFindUniqueArgs<ExtArgs>>): Prisma__MonitorClient<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Monitor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MonitorFindUniqueOrThrowArgs} args - Arguments to find a Monitor
     * @example
     * // Get one Monitor
     * const monitor = await prisma.monitor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonitorFindUniqueOrThrowArgs>(args: SelectSubset<T, MonitorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonitorClient<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Monitor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitorFindFirstArgs} args - Arguments to find a Monitor
     * @example
     * // Get one Monitor
     * const monitor = await prisma.monitor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonitorFindFirstArgs>(args?: SelectSubset<T, MonitorFindFirstArgs<ExtArgs>>): Prisma__MonitorClient<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Monitor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitorFindFirstOrThrowArgs} args - Arguments to find a Monitor
     * @example
     * // Get one Monitor
     * const monitor = await prisma.monitor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonitorFindFirstOrThrowArgs>(args?: SelectSubset<T, MonitorFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonitorClient<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Monitors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Monitors
     * const monitors = await prisma.monitor.findMany()
     * 
     * // Get first 10 Monitors
     * const monitors = await prisma.monitor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monitorWithIdOnly = await prisma.monitor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonitorFindManyArgs>(args?: SelectSubset<T, MonitorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Monitor.
     * @param {MonitorCreateArgs} args - Arguments to create a Monitor.
     * @example
     * // Create one Monitor
     * const Monitor = await prisma.monitor.create({
     *   data: {
     *     // ... data to create a Monitor
     *   }
     * })
     * 
     */
    create<T extends MonitorCreateArgs>(args: SelectSubset<T, MonitorCreateArgs<ExtArgs>>): Prisma__MonitorClient<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Monitors.
     * @param {MonitorCreateManyArgs} args - Arguments to create many Monitors.
     * @example
     * // Create many Monitors
     * const monitor = await prisma.monitor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonitorCreateManyArgs>(args?: SelectSubset<T, MonitorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Monitors and returns the data saved in the database.
     * @param {MonitorCreateManyAndReturnArgs} args - Arguments to create many Monitors.
     * @example
     * // Create many Monitors
     * const monitor = await prisma.monitor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Monitors and only return the `id`
     * const monitorWithIdOnly = await prisma.monitor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MonitorCreateManyAndReturnArgs>(args?: SelectSubset<T, MonitorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Monitor.
     * @param {MonitorDeleteArgs} args - Arguments to delete one Monitor.
     * @example
     * // Delete one Monitor
     * const Monitor = await prisma.monitor.delete({
     *   where: {
     *     // ... filter to delete one Monitor
     *   }
     * })
     * 
     */
    delete<T extends MonitorDeleteArgs>(args: SelectSubset<T, MonitorDeleteArgs<ExtArgs>>): Prisma__MonitorClient<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Monitor.
     * @param {MonitorUpdateArgs} args - Arguments to update one Monitor.
     * @example
     * // Update one Monitor
     * const monitor = await prisma.monitor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonitorUpdateArgs>(args: SelectSubset<T, MonitorUpdateArgs<ExtArgs>>): Prisma__MonitorClient<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Monitors.
     * @param {MonitorDeleteManyArgs} args - Arguments to filter Monitors to delete.
     * @example
     * // Delete a few Monitors
     * const { count } = await prisma.monitor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonitorDeleteManyArgs>(args?: SelectSubset<T, MonitorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Monitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Monitors
     * const monitor = await prisma.monitor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonitorUpdateManyArgs>(args: SelectSubset<T, MonitorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Monitors and returns the data updated in the database.
     * @param {MonitorUpdateManyAndReturnArgs} args - Arguments to update many Monitors.
     * @example
     * // Update many Monitors
     * const monitor = await prisma.monitor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Monitors and only return the `id`
     * const monitorWithIdOnly = await prisma.monitor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MonitorUpdateManyAndReturnArgs>(args: SelectSubset<T, MonitorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Monitor.
     * @param {MonitorUpsertArgs} args - Arguments to update or create a Monitor.
     * @example
     * // Update or create a Monitor
     * const monitor = await prisma.monitor.upsert({
     *   create: {
     *     // ... data to create a Monitor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Monitor we want to update
     *   }
     * })
     */
    upsert<T extends MonitorUpsertArgs>(args: SelectSubset<T, MonitorUpsertArgs<ExtArgs>>): Prisma__MonitorClient<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Monitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitorCountArgs} args - Arguments to filter Monitors to count.
     * @example
     * // Count the number of Monitors
     * const count = await prisma.monitor.count({
     *   where: {
     *     // ... the filter for the Monitors we want to count
     *   }
     * })
    **/
    count<T extends MonitorCountArgs>(
      args?: Subset<T, MonitorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonitorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Monitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MonitorAggregateArgs>(args: Subset<T, MonitorAggregateArgs>): Prisma.PrismaPromise<GetMonitorAggregateType<T>>

    /**
     * Group by Monitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MonitorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonitorGroupByArgs['orderBy'] }
        : { orderBy?: MonitorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MonitorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonitorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Monitor model
   */
  readonly fields: MonitorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Monitor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonitorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Monitor model
   */
  interface MonitorFieldRefs {
    readonly id: FieldRef<"Monitor", 'String'>
    readonly host: FieldRef<"Monitor", 'String'>
    readonly label: FieldRef<"Monitor", 'String'>
    readonly enabled: FieldRef<"Monitor", 'Boolean'>
    readonly status: FieldRef<"Monitor", 'String'>
    readonly consecutive_failures: FieldRef<"Monitor", 'Int'>
    readonly last_response_ms: FieldRef<"Monitor", 'Float'>
    readonly last_error: FieldRef<"Monitor", 'String'>
    readonly last_checked_at: FieldRef<"Monitor", 'DateTime'>
    readonly created_at: FieldRef<"Monitor", 'DateTime'>
    readonly updated_at: FieldRef<"Monitor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Monitor findUnique
   */
  export type MonitorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * Filter, which Monitor to fetch.
     */
    where: MonitorWhereUniqueInput
  }

  /**
   * Monitor findUniqueOrThrow
   */
  export type MonitorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * Filter, which Monitor to fetch.
     */
    where: MonitorWhereUniqueInput
  }

  /**
   * Monitor findFirst
   */
  export type MonitorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * Filter, which Monitor to fetch.
     */
    where?: MonitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monitors to fetch.
     */
    orderBy?: MonitorOrderByWithRelationInput | MonitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Monitors.
     */
    cursor?: MonitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Monitors.
     */
    distinct?: MonitorScalarFieldEnum | MonitorScalarFieldEnum[]
  }

  /**
   * Monitor findFirstOrThrow
   */
  export type MonitorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * Filter, which Monitor to fetch.
     */
    where?: MonitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monitors to fetch.
     */
    orderBy?: MonitorOrderByWithRelationInput | MonitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Monitors.
     */
    cursor?: MonitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Monitors.
     */
    distinct?: MonitorScalarFieldEnum | MonitorScalarFieldEnum[]
  }

  /**
   * Monitor findMany
   */
  export type MonitorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * Filter, which Monitors to fetch.
     */
    where?: MonitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monitors to fetch.
     */
    orderBy?: MonitorOrderByWithRelationInput | MonitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Monitors.
     */
    cursor?: MonitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monitors.
     */
    skip?: number
    distinct?: MonitorScalarFieldEnum | MonitorScalarFieldEnum[]
  }

  /**
   * Monitor create
   */
  export type MonitorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * The data needed to create a Monitor.
     */
    data: XOR<MonitorCreateInput, MonitorUncheckedCreateInput>
  }

  /**
   * Monitor createMany
   */
  export type MonitorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Monitors.
     */
    data: MonitorCreateManyInput | MonitorCreateManyInput[]
  }

  /**
   * Monitor createManyAndReturn
   */
  export type MonitorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * The data used to create many Monitors.
     */
    data: MonitorCreateManyInput | MonitorCreateManyInput[]
  }

  /**
   * Monitor update
   */
  export type MonitorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * The data needed to update a Monitor.
     */
    data: XOR<MonitorUpdateInput, MonitorUncheckedUpdateInput>
    /**
     * Choose, which Monitor to update.
     */
    where: MonitorWhereUniqueInput
  }

  /**
   * Monitor updateMany
   */
  export type MonitorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Monitors.
     */
    data: XOR<MonitorUpdateManyMutationInput, MonitorUncheckedUpdateManyInput>
    /**
     * Filter which Monitors to update
     */
    where?: MonitorWhereInput
    /**
     * Limit how many Monitors to update.
     */
    limit?: number
  }

  /**
   * Monitor updateManyAndReturn
   */
  export type MonitorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * The data used to update Monitors.
     */
    data: XOR<MonitorUpdateManyMutationInput, MonitorUncheckedUpdateManyInput>
    /**
     * Filter which Monitors to update
     */
    where?: MonitorWhereInput
    /**
     * Limit how many Monitors to update.
     */
    limit?: number
  }

  /**
   * Monitor upsert
   */
  export type MonitorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * The filter to search for the Monitor to update in case it exists.
     */
    where: MonitorWhereUniqueInput
    /**
     * In case the Monitor found by the `where` argument doesn't exist, create a new Monitor with this data.
     */
    create: XOR<MonitorCreateInput, MonitorUncheckedCreateInput>
    /**
     * In case the Monitor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonitorUpdateInput, MonitorUncheckedUpdateInput>
  }

  /**
   * Monitor delete
   */
  export type MonitorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * Filter which Monitor to delete.
     */
    where: MonitorWhereUniqueInput
  }

  /**
   * Monitor deleteMany
   */
  export type MonitorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Monitors to delete
     */
    where?: MonitorWhereInput
    /**
     * Limit how many Monitors to delete.
     */
    limit?: number
  }

  /**
   * Monitor without action
   */
  export type MonitorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MonitorScalarFieldEnum: {
    id: 'id',
    host: 'host',
    label: 'label',
    enabled: 'enabled',
    status: 'status',
    consecutive_failures: 'consecutive_failures',
    last_response_ms: 'last_response_ms',
    last_error: 'last_error',
    last_checked_at: 'last_checked_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type MonitorScalarFieldEnum = (typeof MonitorScalarFieldEnum)[keyof typeof MonitorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type MonitorWhereInput = {
    AND?: MonitorWhereInput | MonitorWhereInput[]
    OR?: MonitorWhereInput[]
    NOT?: MonitorWhereInput | MonitorWhereInput[]
    id?: StringFilter<"Monitor"> | string
    host?: StringFilter<"Monitor"> | string
    label?: StringNullableFilter<"Monitor"> | string | null
    enabled?: BoolFilter<"Monitor"> | boolean
    status?: StringFilter<"Monitor"> | string
    consecutive_failures?: IntFilter<"Monitor"> | number
    last_response_ms?: FloatNullableFilter<"Monitor"> | number | null
    last_error?: StringNullableFilter<"Monitor"> | string | null
    last_checked_at?: DateTimeNullableFilter<"Monitor"> | Date | string | null
    created_at?: DateTimeFilter<"Monitor"> | Date | string
    updated_at?: DateTimeFilter<"Monitor"> | Date | string
  }

  export type MonitorOrderByWithRelationInput = {
    id?: SortOrder
    host?: SortOrder
    label?: SortOrderInput | SortOrder
    enabled?: SortOrder
    status?: SortOrder
    consecutive_failures?: SortOrder
    last_response_ms?: SortOrderInput | SortOrder
    last_error?: SortOrderInput | SortOrder
    last_checked_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MonitorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    host?: string
    AND?: MonitorWhereInput | MonitorWhereInput[]
    OR?: MonitorWhereInput[]
    NOT?: MonitorWhereInput | MonitorWhereInput[]
    label?: StringNullableFilter<"Monitor"> | string | null
    enabled?: BoolFilter<"Monitor"> | boolean
    status?: StringFilter<"Monitor"> | string
    consecutive_failures?: IntFilter<"Monitor"> | number
    last_response_ms?: FloatNullableFilter<"Monitor"> | number | null
    last_error?: StringNullableFilter<"Monitor"> | string | null
    last_checked_at?: DateTimeNullableFilter<"Monitor"> | Date | string | null
    created_at?: DateTimeFilter<"Monitor"> | Date | string
    updated_at?: DateTimeFilter<"Monitor"> | Date | string
  }, "id" | "host">

  export type MonitorOrderByWithAggregationInput = {
    id?: SortOrder
    host?: SortOrder
    label?: SortOrderInput | SortOrder
    enabled?: SortOrder
    status?: SortOrder
    consecutive_failures?: SortOrder
    last_response_ms?: SortOrderInput | SortOrder
    last_error?: SortOrderInput | SortOrder
    last_checked_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: MonitorCountOrderByAggregateInput
    _avg?: MonitorAvgOrderByAggregateInput
    _max?: MonitorMaxOrderByAggregateInput
    _min?: MonitorMinOrderByAggregateInput
    _sum?: MonitorSumOrderByAggregateInput
  }

  export type MonitorScalarWhereWithAggregatesInput = {
    AND?: MonitorScalarWhereWithAggregatesInput | MonitorScalarWhereWithAggregatesInput[]
    OR?: MonitorScalarWhereWithAggregatesInput[]
    NOT?: MonitorScalarWhereWithAggregatesInput | MonitorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Monitor"> | string
    host?: StringWithAggregatesFilter<"Monitor"> | string
    label?: StringNullableWithAggregatesFilter<"Monitor"> | string | null
    enabled?: BoolWithAggregatesFilter<"Monitor"> | boolean
    status?: StringWithAggregatesFilter<"Monitor"> | string
    consecutive_failures?: IntWithAggregatesFilter<"Monitor"> | number
    last_response_ms?: FloatNullableWithAggregatesFilter<"Monitor"> | number | null
    last_error?: StringNullableWithAggregatesFilter<"Monitor"> | string | null
    last_checked_at?: DateTimeNullableWithAggregatesFilter<"Monitor"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"Monitor"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Monitor"> | Date | string
  }

  export type MonitorCreateInput = {
    id?: string
    host: string
    label?: string | null
    enabled?: boolean
    status?: string
    consecutive_failures?: number
    last_response_ms?: number | null
    last_error?: string | null
    last_checked_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MonitorUncheckedCreateInput = {
    id?: string
    host: string
    label?: string | null
    enabled?: boolean
    status?: string
    consecutive_failures?: number
    last_response_ms?: number | null
    last_error?: string | null
    last_checked_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MonitorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    consecutive_failures?: IntFieldUpdateOperationsInput | number
    last_response_ms?: NullableFloatFieldUpdateOperationsInput | number | null
    last_error?: NullableStringFieldUpdateOperationsInput | string | null
    last_checked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonitorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    consecutive_failures?: IntFieldUpdateOperationsInput | number
    last_response_ms?: NullableFloatFieldUpdateOperationsInput | number | null
    last_error?: NullableStringFieldUpdateOperationsInput | string | null
    last_checked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonitorCreateManyInput = {
    id?: string
    host: string
    label?: string | null
    enabled?: boolean
    status?: string
    consecutive_failures?: number
    last_response_ms?: number | null
    last_error?: string | null
    last_checked_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MonitorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    consecutive_failures?: IntFieldUpdateOperationsInput | number
    last_response_ms?: NullableFloatFieldUpdateOperationsInput | number | null
    last_error?: NullableStringFieldUpdateOperationsInput | string | null
    last_checked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonitorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    consecutive_failures?: IntFieldUpdateOperationsInput | number
    last_response_ms?: NullableFloatFieldUpdateOperationsInput | number | null
    last_error?: NullableStringFieldUpdateOperationsInput | string | null
    last_checked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MonitorCountOrderByAggregateInput = {
    id?: SortOrder
    host?: SortOrder
    label?: SortOrder
    enabled?: SortOrder
    status?: SortOrder
    consecutive_failures?: SortOrder
    last_response_ms?: SortOrder
    last_error?: SortOrder
    last_checked_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MonitorAvgOrderByAggregateInput = {
    consecutive_failures?: SortOrder
    last_response_ms?: SortOrder
  }

  export type MonitorMaxOrderByAggregateInput = {
    id?: SortOrder
    host?: SortOrder
    label?: SortOrder
    enabled?: SortOrder
    status?: SortOrder
    consecutive_failures?: SortOrder
    last_response_ms?: SortOrder
    last_error?: SortOrder
    last_checked_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MonitorMinOrderByAggregateInput = {
    id?: SortOrder
    host?: SortOrder
    label?: SortOrder
    enabled?: SortOrder
    status?: SortOrder
    consecutive_failures?: SortOrder
    last_response_ms?: SortOrder
    last_error?: SortOrder
    last_checked_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MonitorSumOrderByAggregateInput = {
    consecutive_failures?: SortOrder
    last_response_ms?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}